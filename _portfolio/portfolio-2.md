---
title: "Breast Cancer Detection using Support Vector Machines"
collection: portfolio
date: 2026-02-03
thumbnail: /images/Feature-HeatMap.png
excerpt: "Classical ML pipeline for breast cancer classification using structured diagnostic features, emphasizing interpretability and clinically relevant evaluation."
tags: ["Machine Learning", "SVM", "Healthcare AI", "Classification"]
code_url: "https://github.com/Brandon-Michaels/Breast-Cancer-Detection"
hide_tags: true
---
## Breast Cancer Detection using Support Vector Machines

This project focuses on binary classification for breast cancer diagnosis using classical machine learning methods, with an emphasis on model interpretability, robustness, and evaluation under real-world constraints.

The pipeline operates on structured diagnostic features extracted from medical imaging data, including geometric and statistical measurements of cell nuclei. After preprocessing and normalization, multiple classifiers were evaluated, with Support Vector Machines (SVMs) emerging as the strongest performer due to their ability to model high-dimensional decision boundaries with limited overfitting.

Model development emphasized:
- careful train/validation/test separation
- hyperparameter tuning (kernel choice, regularization strength)
- sensitivity to false negatives, given the clinical context

Performance was evaluated using accuracy, precision/recall, and confusion matrices to understand error modes, not just aggregate metrics.

This project highlights how well-chosen classical ML models can remain highly effective in medical settings where data is structured, limited, and interpretability matters.