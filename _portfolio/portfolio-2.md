---
title: "Breast Cancer Detection using Support Vector Machines"
collection: portfolio
date: 2026-02-03
thumbnail: /images/Feature-HeatMap.png
excerpt: "Classical ML pipeline for breast cancer classification using structured diagnostic features, emphasizing interpretability and clinically relevant evaluation (team project for CS4641)."
tags: ["Machine Learning", "SVM", "Healthcare AI", "Classification"]
code_url: "https://github.com/Brandon-Michaels/Breast-Cancer-Detection"
---
## Breast Cancer Detection using Support Vector Machines
### Role: ML Engineer - Led SVM Development

As an ML student with the CS4641 - Machine Learning class at Georgia Tech, I was able to collaborate with 3 other students to create an SVM model and data pipeline trained for binary classification on breast cancer images.

The pipeline operates on structured diagnostic features extracted from medical imaging data, including geometric and statistical measurements of cell nuclei. After preprocessing and normalization, multiple classifiers were evaluated, with Support Vector Machines (SVMs) emerging as the strongest performer due to their ability to model high-dimensional decision boundaries with limited overfitting.

Model development emphasized:
- careful train/validation/test separation
- hyperparameter tuning (kernel choice, regularization strength)
- sensitivity to false negatives, given the clinical context

Performance was evaluated using accuracy, precision/recall, and confusion matrices to understand error modes, not just aggregate metrics.  The final SVM achieved:

- **98.56% test accuracy**
- **94.75% mean 5-fold cross-validation accuracy**
- **0.9804 F1-score (malignant as positive class)**

The high F1-score for malignant cases indicates strong recall and precision balance, which is especially important in medical screening contexts where missed positive cases carry significant cost.

This project highlights how well-chosen classical ML models can remain highly effective in medical settings where data is structured, limited, and interpretability matters.