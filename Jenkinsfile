pipeline {
    agent any

    environment {
        
    }

    stages {
        stage('Clone Repo') {
            steps {
                git url: 'https://github.com/luckyokta/new-student-portal.git',
                branch: main
            }
        }

        stage('Inject ENV') {
            steps {
                withCredentials([file(credentialId: 'env-file', variable: 'ENVFILE')]) {
                    sh '''
                    rm -f .env
                    cp '$ENVFILE' .env
                    '''
                }
            }
        }

        stage('Build Docker') {
            steps {
                sh 'docker build -t my-node-app .'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker run my-node-app
                docker ps
                '''
            }
        }
    }
}