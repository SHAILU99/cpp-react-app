#include <httplib.h>
#include <nlohmann/json.hpp>
#include <unordered_map>
#include <sstream>
#include <fstream>
#include <set>
#include <algorithm>
#include <iostream>  // Required for std::cout

using namespace httplib;
using json = nlohmann::json;

// Load stopwords from a file into a set
std::set<std::string> load_stopwords(const std::string& path) {
    std::set<std::string> stopwords;
    std::ifstream infile(path);
    std::string word;
    while (infile >> word) {
        stopwords.insert(word);
    }
    return stopwords;
}

// Simple word frequency analysis
json analyze_text(const std::string& text, const std::set<std::string>& stopwords) {
    std::unordered_map<std::string, int> freq;
    std::istringstream iss(text);
    std::string word;
    int count = 0;

    while (iss >> word) {
        // Remove punctuation
        word.erase(std::remove_if(word.begin(), word.end(), ::ispunct), word.end());
        std::transform(word.begin(), word.end(), word.begin(), ::tolower);
        if (!stopwords.count(word) && !word.empty()) {
            freq[word]++;
        }
        count++;
    }

    // Sort top 3 frequent words
    std::vector<std::pair<std::string, int>> sorted(freq.begin(), freq.end());
    std::sort(sorted.begin(), sorted.end(), [](auto& a, auto& b) {
        return b.second < a.second;
    });

    std::vector<std::string> top_keywords;
    for (int i = 0; i < std::min(3, (int)sorted.size()); ++i) {
        top_keywords.push_back(sorted[i].first);
    }

    return json{
        {"word_count", count},
        {"top_keywords", top_keywords}
    };
}

int main() {
    Server svr;
    auto stopwords = load_stopwords("stopwords.txt");

    svr.Post("/analyze", [&](const Request& req, Response& res) {
        try {
            auto data = json::parse(req.body);
            std::string text = data["text"];
            auto result = analyze_text(text, stopwords);
            res.set_content(result.dump(), "application/json");
        } catch (const std::exception& e) {
            res.status = 400;
            res.set_content(json{{"error", e.what()}}.dump(), "application/json");
        }
    });

    std::cout << "Server started at http://localhost:5000" << std::endl;

    svr.listen("0.0.0.0", 5000);
    return 0;
}
