# Automated Static Website Deployment with PR Previews

## 📌 Project Overview
This project builds a fully automated CI/CD pipeline for deploying a static website to **AWS S3 + CloudFront** using **GitHub Actions**.  
By the end of Month 1, the workflow automatically deploys updates to AWS when pull requests (PRs) are merged into the main branch and provides PR previews for validation.

---

## 🎯 Goal
Deliver a complete DevOps workflow that:
- Hosts a static website on **AWS S3 + CloudFront**
- Automates deployment via **GitHub Actions**
- Runs **linting and tests** on pull requests
- Provides **PR feedback comments**
- Performs **cache invalidations** automatically

---

## 🏗️ Architecture Overview
**Core Components**
- **AWS S3** – static website storage  
- **AWS CloudFront** – global CDN distribution  
- **GitHub Actions** – automation pipeline (CI/CD)  
- **Bash** – local deployment scripts  

