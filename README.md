# Automated Static Website Deployment with PR Previews

## 📌 Project Overview
This project builds a fully automated CI/CD pipeline for deploying a static website to **AWS S3 + CloudFront** using **GitHub Actions**.  
By the end of Month 1, the workflow automatically deploys updates to AWS when pull requests (PRs) are merged into the main branch and provides PR previews for validation.

### Architecture Diagram

```mermaid
graph TD
    subgraph Local_Machine ["💻 Local Machine"]
        Dev((Developer))
    end

    subgraph GitHub ["GitHub Cloud"]
        Repo[Repository]
        Action[GitHub Actions<br/>(CI/CD Pipeline)]
    end

    subgraph AWS ["☁️ AWS Cloud"]
        S3[S3 Bucket<br/>(Private Storage)]
        CF[CloudFront CDN<br/>(Public Distribution)]
    end

    User((End User))

    %% Flows
    Dev -- "1. Push Code (git push)" --> Repo
    Repo -- "2. Trigger Event" --> Action
    Action -- "3. Lint & Test" --> Action
    Action -- "4. Sync Files" --> S3
    Action -- "5. Invalidate Cache" --> CF
    CF -- "6. Fetch Content (OAC)" --> S3
    User -- "7. HTTPS Request" --> CF
```

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


