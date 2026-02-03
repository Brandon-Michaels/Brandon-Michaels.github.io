---
title: "Ensemble SARIMA–XGBoost Commodities Strategy"
collection: portfolio
date: 2026-02-01
thumbnail: /images/HP-Filter-Gold.png
excerpt: "Hybrid time-series + ML residual model for commodity forecasting and signal-based backtesting (GTSF Quant Sector)."
tags: ["Time Series", "XGBoost", "Quant", "Backtesting"]
code_url: "https://github.com/Brandon-Michaels/SARIMA-XGBoost-Commodities-Strat"
---

## 📈 Ensemble SARIMA–XGBoost Commodities Strategy
Georgia Tech Student Foundation (GTSF) – Quantitative Sector

This project explores an ensemble forecasting and trading strategy for commodity markets, combining classical time-series modeling with modern machine learning to capture both linear temporal structure and nonlinear residual dynamics.

The core approach integrates SARIMA models for structured trend and seasonality modeling with XGBoost regressors trained on SARIMA residuals and engineered exogenous features. SARIMA is first used to model the dominant autoregressive and seasonal components of commodity price series. The residuals—representing nonlinear effects, regime shifts, and higher-order interactions—are then modeled using gradient-boosted decision trees.

The resulting two-stage ensemble improves predictive performance over either method alone by explicitly decomposing the signal into interpretable linear components and flexible nonlinear corrections.

From a trading perspective, forecasts are translated into directional signals and evaluated using rolling-window backtests across multiple commodities. The strategy emphasizes:
- robust walk-forward validation
- careful leakage prevention
- realistic signal generation (no look-ahead bias)

Performance is assessed using both statistical forecasting metrics (e.g., RMSE, MAE) and financial metrics such as cumulative return and drawdown behavior.

This work was conducted as part of the Georgia Tech Student Foundation Quantitative Sector, emphasizing research rigor, reproducibility, and practical constraints faced in real-world quantitative strategies.
