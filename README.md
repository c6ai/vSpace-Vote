# vSpaceVote 🗳️ - Secure Online Voting System Documentation

[![Build Status](https://github.com/<your-username>/<your-repo>/actions/workflows/main.yml/badge.svg)](https://github.com/<your-username>/<your-repo>/actions/workflows/main.yml)
[![Coverage Status](https://coveralls.io/repos/github/<your-username>/<your-repo>/badge.svg?branch=main)](https://coveralls.io/github/<your-username>/<your-repo>?branch=main)

**vSpaceVote** is a web-based voting system designed for secure and transparent elections or decision-making processes. It leverages a modern technology stack to ensure security, reliability, accessibility, and auditability.

## Current Implementation Status 🚧

### Authentication & Core Features
- [x] Project structure setup
- [x] Basic React application with routing
- [x] Supabase authentication integration
- [x] Documentation viewer implementation
- [x] Progress tracking matrix
- [ ] Optional authentication methods (Firebase, Entra Verified ID, WalletConnect) - Planned
- [ ] Complete database schema implementation
- [ ] Comprehensive test coverage

### Tech Stack

*Current Implementation:*
- **Frontend:** React with TypeScript ⚛️
  - UI Components: shadcn/ui
  - State Management: React Query + Context
  - Routing: Wouter
- **Backend:** Express.js
- **Database:** PostgreSQL 🐘 via Supabase
- **Authentication:** Supabase Auth 🔐
- **Styling:** Tailwind CSS with shadcn/ui components

*Planned Extensions:*
- End-to-End Testing: Playwright 🎭
- Infrastructure: GCP Anthos ☸️
- Infrastructure as Code: Terraform
- CI/CD: GitHub Actions 🦾
- Security: OpenSSL 🔒

## Requirements Breakdown (ReqIF) 🏗️

This section outlines the requirements for vSpaceVote, sorted in a logical order for development and testing. The original ReqIF numbering is maintained for traceability.

### I. System Overview and Architecture

The vSpaceVote system is designed as a modern web application with emphasis on:
- Secure authentication and authorization
- Real-time data synchronization
- Comprehensive audit logging
- High availability and scalability
- Accessibility and compliance

Key architectural decisions:
- Microservices-based architecture
- Event-driven design for real-time updates
- CQRS pattern for complex data operations
- Zero-trust security model

### II. Security Framework and Compliance

Security measures implemented:
- Multi-factor authentication
- End-to-end encryption
- Regular security audits
- Comprehensive logging and monitoring
- Access control and role-based permissions

Compliance standards:
- GDPR
- WCAG 2.1
- ISO 27001
- Local election regulations

### III. Development and Implementation Requirements

#### A. Authentication and Access Control (4.x.x)
1. **Risk Mitigation and Security Controls**
   - Comprehensive threat modeling
   - Multi-layer security architecture
   - Regular security assessments
   - Incident response procedures

2. **Network and Infrastructure Security**
   - Secure network configuration
   - Infrastructure hardening
   - Regular vulnerability scanning
   - Continuous monitoring

#### B. Voter Authentication and Ballot Management (5.x.x)
1. **Voter Identity Verification**
   - Multi-factor authentication
   - Secure session management
   - Identity verification protocols
   - Audit trail maintenance

2. **Ballot Processing**
   - Secure ballot storage
   - Vote integrity verification
   - Ballot anonymization
   - Results validation

#### C. Testing and Verification (6.x.x)
1. **Logic and Accuracy Testing**
   - Comprehensive test suites
   - Public verification procedures
   - Independent validation
   - Performance testing

2. **Audit Requirements**
   - Complete audit trails
   - Immutable logging
   - Independent verification
   - Compliance monitoring

#### D. Data Management and Privacy (7.x.x)
1. **Data Protection**
   - End-to-end encryption
   - Secure data storage
   - Access control mechanisms
   - Data retention policies

2. **Privacy Controls**
   - Vote anonymization
   - Data minimization
   - Privacy impact assessments
   - User consent management

#### E. Vote Integrity and Secrecy (8.x.x)
1. **Vote Protection**
   - Ballot encryption
   - Anti-tampering measures
   - Vote verification
   - Audit capabilities

2. **Voter Privacy**
   - Vote-voter separation
   - Anti-correlation measures
   - Privacy preserving protocols
   - Secure transmission

#### F. User Interface and Accessibility (9.x.x)
1. **Interface Requirements**
   - Responsive design
   - Accessibility compliance
   - Multi-language support
   - Error handling

2. **Usability Standards**
   - Intuitive navigation
   - Clear instructions
   - Feedback mechanisms
   - Help documentation

#### G. System Operations (10.x.x)
1. **Operational Requirements**
   - High availability
   - Performance monitoring
   - Incident response
   - Disaster recovery

2. **Maintenance Procedures**
   - Regular updates
   - Security patches
   - Performance optimization
   - System backups

#### H. Administrative Controls (11.x.x)
1. **Personnel Management**
   - Access control
   - Training requirements
   - Security clearance
   - Role definitions

2. **Risk Management**
   - Risk assessment
   - Mitigation strategies
   - Compliance monitoring
   - Regular audits

### IV. Implementation Priorities

1. **Phase 1: Core Infrastructure**
   - Basic authentication
   - Database setup
   - API framework
   - Security foundations

2. **Phase 2: Voting System**
   - Ballot management
   - Vote processing
   - Results tabulation
   - Audit logging

3. **Phase 3: Security Enhancements**
   - Advanced authentication
   - Encryption improvements
   - Security hardening
   - Penetration testing

4. **Phase 4: Accessibility and UI**
   - WCAG compliance
   - Responsive design
   - Multi-language support
   - User testing


## Development Guide for Software Engineers 💻

### Local Development Setup

1. **Prerequisites**
```bash
Node.js v18+
npm v9+
PostgreSQL 15+
```

2. **Environment Configuration**
```env
# Required environment variables
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

3. **Development Server**
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Architecture Overview

1. **Frontend Architecture**
   - Component-based structure using React with TypeScript
   - Custom hooks for business logic and state management
     - `useAuth` for authentication state
     - `useUser` for user data management
     - `useToast` for notifications
   - State management with React Query
     - Optimistic updates for better UX
     - Automatic background refetching
     - Cache invalidation strategies
   - Type-safe development with TypeScript
     - Strict type checking enabled
     - Comprehensive type definitions
     - Zod schema validation

2. **Backend Architecture**
   - Express.js REST API
     - Route-based middleware
     - Error handling middleware
     - Request validation
   - PostgreSQL with Supabase
     - Connection pooling
     - Prepared statements
     - Migrations management
   - Authentication middleware
     - Session management
     - JWT validation
     - Role-based access control
   - Rate limiting and security measures
     - Request throttling
     - CORS configuration
     - XSS protection

3. **Database Schema**
   - Users table with authentication
     - Secure password hashing
     - Session management
     - Profile information
   - Voting records with audit trails
     - Immutable vote records
     - Timestamp tracking
     - IP address logging
   - Compliance tracking matrix
     - Requirement tracking
     - Implementation status
     - Audit history

### Best Practices

1. **Code Organization**
   - Feature-based directory structure
   - Separation of concerns
   - Type-safe interfaces
   - Comprehensive documentation

2. **Testing Strategy**
   - Unit tests for components and utilities
   - Integration tests for API endpoints
   - E2E tests for critical flows
   - Accessibility testing

3. **Performance Optimization**
   - Code splitting
   - Lazy loading
   - Caching strategies
   - Bundle size optimization

4. **Security Measures**
   - Input validation
   - XSS prevention
   - CSRF protection
   - Rate limiting

## Getting Started 🚀

### Prerequisites
- Node.js v18+
- npm v9+
- Supabase account and project
- Environment variables set up in your IDE

### Environment Variables
Required environment variables for the application:
```env
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Installation and Setup
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables in your IDE's settings
4. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure 📂

```
.
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── auth/       # Authentication components
│   │   │   ├── docs/       # Documentation viewer
│   │   │   ├── layout/     # Layout components
│   │   │   └── ui/         # Reusable UI components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions and configs
│   │   ├── pages/          # Page components
│   │   └── App.tsx         # Main application component
├── server/
│   ├── routes/             # API routes
│   ├── middleware/         # Express middleware
│   └── index.ts            # Server entry point
├── db/
│   └── schema.ts           # Database schema definitions
└── README.md
```

## Development Workflow 🔄

### Authentication Implementation
The application uses Supabase for authentication with the following features:
- Email/password authentication
  - Secure password hashing
  - Rate limiting on attempts
  - Password recovery flow
- Session management
  - JWT-based sessions
  - Automatic token refresh
  - Secure session storage
- Protected routes
  - Role-based access control
  - Route guards
  - Authentication state management
- User profile management
  - Profile updates
  - Account settings
  - Security preferences

### Documentation System
- Real-time requirements tracking
- Progress matrix visualization
- Compliance status monitoring

## Testing 🧪

1. **Unit Testing**
   - Component testing with React Testing Library
   - API endpoint testing
   - Utility function testing

2. **Integration Testing**
   - API integration tests
   - Database interaction tests
   - Authentication flow testing

3. **End-to-End Testing**
   - Critical user journeys
   - Cross-browser testing
   - Accessibility testing

4. **Performance Testing**
   - Load testing
   - Stress testing
   - Performance monitoring

## Deployment 🚀

1. **Production Environment Setup**
   - Environment configuration
   - Database provisioning
   - SSL/TLS setup

2. **Deployment Process**
   - Build optimization
   - Static asset deployment
   - Database migrations

3. **Monitoring and Maintenance**
   - Performance monitoring
   - Error tracking
   - Regular updates and maintenance

## Security Considerations 🔐

1. **Authentication Security**
   - Supabase authentication with secure session management
     - JWT token handling
     - Session timeout management
     - Secure cookie settings
   - Protected API routes
     - Role-based middleware
     - Request validation
     - Rate limiting
   - Secure environment variable handling
     - Environment separation
     - Secret management
     - Key rotation
   - Input validation and sanitization
     - Form validation
     - SQL injection prevention
     - XSS protection

2. **Data Security**
   - Encryption at rest and in transit
   - Regular security audits
   - Access control mechanisms
   - Audit logging

3. **Infrastructure Security**
   - Network security configuration
   - Firewall rules
   - DDoS protection
   - Regular security patches

## Compliance Matrix 📊

| Requirement                                          | Status       | Notes                                                                                                                                                                         |
| :--------------------------------------------------- | :----------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **4.1.1** Risk Mitigation Documentation              | ☐ (TODO)    | Document how the system detects, prevents, or mitigates common risks (external threats, insider threats, malware, DoS/DDoS, social engineering, device tampering, etc.). |
| **4.1.1.a** External Threat Protection               | ☐ (TODO)    | Implement and document controls for preventing unauthorized remote access.                                                                                                    |
| **4.1.1.b** Insider Threat Protection                 | ☐ (TODO)    | Implement policies, technical controls (e.g., RLS), and logging to prevent unauthorized actions by insiders.                                                                  |
| **4.1.1.c** Malware Protection                         | ☐ (TODO)    | Implement input validation, sanitization, and security scanning to prevent malware attacks.                                                                                    |
| **4.1.1.d** DoS/DDoS Protection                      | ☐ (TODO)    | Configure load balancing and DDoS mitigation on GCP.                                                                                                                          |
| **4.1.1.e** Social Engineering Protection             | ☐ (TODO)    | Provide user education and awareness training.                                                                                                                                 |
| **4.1.1.f** Voter Device Tampering Mitigation         | ☐ (TODO)    | Implement client-side security measures and educate users on securing their devices.                                                                                            |
| **4.1.1.g** Sufficient IT Resources                   | ☐ (TODO)    | Ensure adequate resources (compute, network, storage) and monitoring. Plan for auto-scaling using Anthos HPA.                                                              |
| **4.1.1.h** Strong Authentication                     | ☐ (TODO)    | Enforce strong password policies and implement MFA through Supabase Auth.                                                                                                   |
| **4.1.1.i** Data Exfiltration/Eavesdropping Protection | ☐ (TODO)    | Use encryption (TLS/SSL), implement RLS, and monitor for suspicious activity.                                                                                                   |
| **4.1.1.j** Logic and Accuracy Error Prevention        | ☐ (TODO)    | Implement thorough testing (unit, integration, E2E) and validation.                                                                                                           |
| **4.1.1.k** Network Security Configuration            | ☐ (TODO)    | Securely configure VPC, subnets, firewalls, and load balancers on GCP using Terraform.                                                                                        |
| **4.1.1.l** Unauthorized Code Modification Prevention   | ☐ (TODO)    | Implement code review, use signed commits, and enforce secure deployment practices through CI/CD.                                                                                  |
| **4.1.2** Security Controls List & Checks             | ☐ (TODO)    | Publish a list of security controls and perform regular security checks.                                                                                                     |
| **4.1.3** Infrastructure Control and Details          | ☐ (TODO)    | Document infrastructure details and control mechanisms (using GCP Anthos and Terraform).                                                                                       |
| **4.1.4** System Sanitization and Patching            | ☐ (TODO)    | Ensure systems are delivered free of user data and are regularly patched.                                                                                                      |
| **4.1.5** Multi-Person Oversight                       | ☐ (TODO)    | Enforce multi-person oversight for development, deployment, and operations through code reviews, CI/CD approvals, etc.                                                              |
| **4.1.6** Heterogeneous Environments                 | ☐ (TODO)    | Consider deploying across multiple zones/regions for increased resilience (if feasible).                                                                                      |
| **4.1.7** Data Residency (Geo-Location)            | ☐ (TODO)    | Ensure data and infrastructure are located within the designated Geo-Location (use Geo-Location specific GCP regions).                                                                                             |
| **4.1.8** End-to-End Encryption                       | ☐ (TODO)    | Implement end-to-end encryption (in transit and at rest).                                                                                                                      |
| **4.1.9** Firewalls, IDS/IPS, Logging, Threat Detection| ☐ (TODO)    | Configure firewalls, intrusion detection/prevention, logging, and threat detection on GCP.                                                                                    |
| **4.1.10** Business Continuity and Data Recovery       | ☐ (TODO)    | Develop and document a business continuity and data recovery plan with RTO ≤ 1 hour and RPO ≤ 15 minutes.                                                                       |
| **4.1.11** Staff Device and Network Security          | ☐ (TODO)    | Enforce policies for secure staff devices and networks with MFA.                                                                                                             |
| **4.1.12** Admin Two-Factor Authentication            | ☐ (TODO)    | Implement two-factor authentication for the administrative interface using Supabase Auth.                                                                                   |
| **4.1.13** Secure Password and Key Sharing             | ☐ (TODO)    | Document procedures for securely sharing passwords and decryption keys.                                                                                                       |
| **4.1.14** Admin Password Reset                       | ☐ (TODO)    | Enable password reset for municipal administrators through Supabase Auth.                                                                                                  |
| **4.1.15** Cryptographic Module Examination           | ☐ (TODO)    | Use a well-vetted cryptographic module (e.g., OpenSSL) that has undergone independent examination.                                                                             |
| **4.1.16** Client-Side Threshold Encryption          | ☐ (TODO)    | Implement and document threshold encryption if client-side encryption is used.                                                                                                |
| **4.1.17** Cyber-Incident Response Plan               | ☐ (TODO)    | Develop and document a cyber-incident response plan.                                                                                                                          |
| **4.1.18** Threat Detection and Failsafe Training     | ☐ (TODO)    | Provide training on threat detection, response, and failsafe procedures.                                                                                                     |
| **4.2.1** Residual Data Mitigation on Public Devices   | ☐ (TODO)    | Advise users on clearing browser data and ensure ballot data resides only in volatile memory (client-side).                                                                          |
| **4.2.2** Prevention of Vote Data on Voter Devices   | ☐ (TODO)    | Ensure no vote data is stored on the voter's device after submission or cancellation.                                                                                            |
| **4.3.1** Third-Party Penetration Testing             | ☐ (TODO)    | Conduct at least one third-party penetration test every 12 months.                                                                                                             |
| **4.3.2** Subcontractor Security                      | ☐ (TODO)    | Ensure subcontractors meet security requirements.                                                                                                                                |
| **4.3.3** Load and Simulation Testing                 | ☐ (TODO)    | Conduct load testing to simulate election day loads.                                                                                                                           |
| **4.3.4** Backup Subcontractor                        | ☐ (TODO)    | Engage a backup subcontractor if necessary.                                                                                                                                    |
| **5.1.1** Voter Eligibility Authentication           | ☐ (TODO)    | Integrate with the municipality's chosen authentication mechanism through Supabase Auth.                                                                                      |
| **5.1.2** Pre-Tally Ballot Verification              | ☐ (TODO)    | Verify that all stored ballots were cast by eligible voters before tallying.                                                                                                     |
| **5.2.1** One Vote Per Voter Per Contest             | ☐ (TODO)    | Ensure each voter can cast only one ballot per contest, handling multiple channels.                                                                                             |
| **5.2.2** Authentication Safeguards                   | ☐ (TODO)    | Safeguard the authentication process to prevent impersonation.                                                                                                                  |
| **6.1.1** Logic and Accuracy (L&A) Testing            | ☐ (TODO)    | Conduct L&A testing before the voting period.                                                                                                                                 |
| **6.1.2** Testing Parameters for Correct Counting     | ☐ (TODO)    | Test all ballot variations and valid/invalid classifications.                                                                                                                  |
| **6.1.3** Public L&A Testing Parameters              | ☐ (TODO)    | Make L&A testing parameters public.                                                                                                                                             |
| **6.1.4** Public Demonstration Environment             | ☐ (TODO)    | Provide a public demonstration environment.                                                                                                                                       |
| **6.1.5** Coordinated Vulnerability Disclosure (CVD) Policy | ☐ (TODO) | Maintain a CVD policy.                                                                                                                                                        |
| **6.1.6** Cooperation with Additional Security Tests   | ☐ (TODO)    | Cooperate with additional security tests commissioned by election administrators.                                                                                             |
| **6.1.7** Open-Ended Adversarial Testing              | ☐ (TODO)    | Allow open-ended adversarial testing under specified terms.                                                                                                                   |
| **6.2.1** Audit Procedure                             | ☐ (TODO)    | Provide an audit procedure, testing manual, and training.                                                                                                                      |
| **6.2.2** Immutable Audit Logs                       | ☐ (TODO)    | Secure and render all audit logs immutable.                                                                                                                                     |
| **6.2.3** Human-Readable Audit Log                    | ☐ (TODO)    | Produce a human-readable, non-writeable audit log of user actions (excluding ballot choice).                                                                                  |
| **6.2.4** Chronological System Log                    | ☐ (TODO)    | Maintain a chronological system log of processes during the voting period.                                                                                                      |
| **6.2.5** Voter Confirmation of Vote Intent           | ☐ (TODO)    | Enable each voter to confirm their vote reflects their intent and has not been altered.                                                                                          |
| **6.2.6** Independent Evidence of Ballot Inclusion    | ☐ (TODO)    | Provide evidence (independent from the main system) that each legitimate ballot is included in final results and only eligible ballots are counted.                               |
| **6.2.7** Reproducible Counting                       | ☐ (TODO)    | Ensure counting is reproducible with evidence that can be independently audited.                                                                                               |
| **6.3.1** Documentation for Election Administrator    | ☐ (TODO)    | Provide technical architecture, user handbooks, performance documentation, threat assessment, source code (for inspection), data destruction confirmation, vulnerability reports. |
| **6.3.2** Processes for Independent Observers         | ☐ (TODO)    | Document processes for independent observers to verify the election.                                                                                                           |
| **7.1.1.1** Role-Based Permission Framework            | ☐ (TODO)    | Implement a role-based permission framework (using Supabase RLS and Express middleware).                                                                                         |
| **7.1.1.2** Robust Auditing of User Actions           | ☐ (TODO)    | Facilitate robust auditing of user actions, including unauthorized access attempts and privilege escalations.                                                                   |
| **7.1.2.1** Independently Verifiable Cryptographic Proof| ☐ (TODO)    | Produce independently verifiable cryptographic proof of correct election results (if applicable).                                                                               |
| **7.1.3.1** Return or Sanitize Election Data          | ☐ (TODO)    | Return or sanitize all election data upon instruction, subject to legislation.                                                                                                |
| **7.1.3.2** Data Retention for Legal Reasons          | ☐ (TODO)    | Retain relevant data for legal or procedural reasons (recount, court order).                                                                                                   |
| **7.1.3.3** No Unauthorized Data Sharing             | ☐ (TODO)    | Do not share or publish proprietary or confidential data without written permission.                                                                                            |
| **7.1.3.4** Privacy and Re-identification Risk Assessments| ☐ (TODO)    | Conduct privacy and re-identification risk assessments if data usage or retention changes.                                                                                    |
| **7.1.3.5** Notification of Data Collection and Usage | ☐ (TODO)    | Notify the electorate about data collection and usage if authorized by the municipality.                                                                                          |
| **7.1.3.6** Opt-Out of Product-Improvement Data Collection| ☐ (TODO)    | Include technical measures allowing users to opt out of product-improvement data collection.                                                                                   |
| **7.1.3.7** Data Destruction on Municipality's Instructions| ☐ (TODO)    | Destroy data upon the municipality's instructions, subject to record-retention legislation.                                                                                 |
| **8.1.1** Vote Integrity                              | ☐ (TODO)    | Protect the integrity of votes throughout the entire process.                                                                                                                   |
| **8.1.2** Vote Storage Without Voter Linkage         | ☐ (TODO)    | Store each vote without direct voter linkage, preventing re-identification.                                                                                                     |
| **8.1.3** Vote Secrecy                               | ☐ (TODO)    | Guarantee the secrecy of each vote during casting, transport, storage, and tabulation.                                                                                           |
| **8.1.4** Prevention of Ballot Tracing                | ☐ (TODO)    | Ensure no election official or system operator can trace a ballot back to a specific voter.                                                                                      |
| **8.1.5** Ballot Submission Confirmation              | ☐ (TODO)    | Confirm ballot submission but not allow the voter to demonstrate proof of how they voted.                                                                                     |
| **9.1.1.1** Standard Client-Side Technologies         | ✅ Done    | Using standard client-side technologies (HTML, CSS, JavaScript) without requiring special plugins.                                                                               |
| **9.1.1.2** User-Centered Design                      | 🔄 In Progress    | Design with a user-centered approach for diverse user types, including those with disabilities.                                                                                 |
| **9.1.1.3** Accessibility Legislation and WCAG Conformance| 🔄 In Progress    | Meet relevant accessibility legislation and conform to WCAG guidelines.                                                                                                      |
| **9.1.1.4** Proper Rendering Across Screen Sizes      | ✅ Done    | Ensure proper rendering across screens of all sizes, with minimal scrolling/zooming, and support for multiple input methods.                                                      |
| **9.1.1.6** Consistent Interface and Interactions     | ☐ (TODO)    | Ensure the interface and interactions are consistent across all supported devices/browsers.                                                                                    |
| **9.1.1.7** Ballot Cast Confirmation/Error Notification| ☐ (TODO)    | Confirm to the voter that their ballot was successfully (or unsuccessfully) cast.                                                                                               |
| **9.1.1.9** Declining or Spoiling Ballots             | ☐ (TODO)    | Provide the function to decline or spoil a ballot if local legislation allows.                                                                                                |
| **9.1.1.10** Accommodation for Voters with Disabilities| ☐ (TODO)    | Accommodate independent usage by voters with disabilities, including audio readouts and screen-reader compatibility.                                                              |
| **9.1.1.11** Localization in Legislated Languages    | ☐ (TODO)    | Localize the application in legislated languages, as required.                                                                                                                 |
| **9.1.1.12** Session Cancellation                     | ☐ (TODO)    | Allow voters to cancel or halt a voting session at any point before final submission without being recorded as having voted.                                                      |
| **9.1.1.13** Audio-Tactile Interface Capabilities    | ☐ (TODO)    | If an audio-tactile interface is provided, it shall offer the same verification and casting capabilities as the standard interface.                                               |
| **9.1.1.14** Unicode Character Support                 | ☐ (TODO)    | Support Unicode characters for candidate names in English, French, and relevant local languages as required by the designated Geo-Location.                                     |
| **9.1.1.15** Usability/Accessibility Testing          | ☐ (TODO)    | Test for usability/accessibility (e.g., ensuring interoperability with assistive technologies).                                                                                |
| **9.1.2.1** Accessible and Interoperable Reports      | ☐ (TODO)    | Ensure all generated reports are accessible and interoperable (e.g., CSV format).                                                                                                |
| **10.1.1** Operational and Accessible Voting Period   | ☐ (TODO)    | Ensure the system is operational and accessible for all voters throughout the designated voting period.                                                                           |
| **10.1.2** Contingency Plan for Outages               | ☐ (TODO)    | Have a contingency plan to address network or power outages.                                                                                                                     |
| **10.1.3** Stress/Load Testing                        | ☐ (TODO)    | Perform stress/load tests simulating peak voting rates.                                                                                                                          |
| **11.1.1** Sufficient Qualified Personnel             | ☐ (TODO)    | Ensure sufficient qualified personnel are available to address technical issues.                                                                                                 |
| **11.1.2** Third-Party Contractor Screening           | ☐ (TODO)    | Ensure all third-party contractors meet local security and screening requirements.                                                                                             |
| **11.1.3** Vote Reconciliation from Multiple Channels| ☐ (TODO)    | Integrate logic ensuring that if multiple voting channels exist, only one vote per voter per contest is counted in final tabulation.                                               |
| **11.2.1** Security Categorization                    | ☐ (TODO)    | Facilitate a security categorization (per guidelines applicable to the designated Geo-Location) before each election.                                                              |
| **11.2.2** High Unmitigated Risk                      | ☐ (TODO)    | Respect the municipality's determination to refrain from using an online solution if the unmitigated risk is evaluated as "High."                                                  |
| **11.2.3** Harmonized Threat Risk Assessment         | ☐ (TODO)    | Cooperate with a Harmonized Threat Risk Assessment, addressing various compromise scenarios.                                                                                        |
| **11.2.4** Final Residual Risk Acceptance             | ☐ (TODO)    | Respect the requirement that the final residual risk acceptance be signed by the Election Administrator or equivalent.                                                              |
| **11.2.5** Physical Security of Devices (Idle)        | ☐ (TODO)    | Ensure any physical devices used for online voting reside in physically secure environments when idle.                                                                           |
| **11.2.6** Physical Security Measures (Tampering)    | ☐ (TODO)    | The municipal authority shall implement physical security measures to detect/prevent tampering with vSpaceVote-related devices prior to and after the election.                   |


## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes with clear commit messages
4. Push to the branch
5. Create a new Pull Request

### Code Style Guide
- Follow TypeScript best practices
- Use ESLint and Prettier configurations
- Write comprehensive documentation
- Include tests for new features

## License

This project is licensed under the MIT License - see the LICENSE file for details

## TODOs and Next Steps 📝

1. Authentication and Authorization
   - [ ] Implement Firebase authentication integration
   - [ ] Add Entra Verified ID support
   - [ ] Integrate WalletConnect functionality

2. Documentation
   - [ ] Complete API documentation
   - [ ] Add authentication flow diagrams
   - [ ] Update compliance tracking matrix

3. Testing
   - [ ] Implement end-to-end tests
   - [ ] Add authentication flow tests
   - [ ] Complete accessibility testing

4. Security
   - [ ] Implement additional security measures
   - [ ] Complete security audit
   - [ ] Document security procedures

5. Deployment
   - [ ] Set up CI/CD pipeline
   - [ ] Configure production environment
   - [ ] Document deployment procedures