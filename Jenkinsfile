pipeline {
    agent any

    environment {
        NODE_VERSION = '18'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/simonbaire/api-test-framework'
            }
        }

        stage('Install Node.js') {
            steps {
                script {
                    def nodeHome = tool name: 'NodeJS 18', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
                    env.PATH = "${nodeHome}/bin:${env.PATH}"
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'cypress/videos/**/*.mp4', fingerprint: true
            junit '**/cypress/reports/test-results-*.xml'
        }
    }
}