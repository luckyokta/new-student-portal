pipeline {
    agent any

    environment {
        PATH: '${env.PATH};C:\\Program Files\\Docker\\Docker\\resources\\bin'
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
                    bat '''
                    rm -f .env
                    copy '%ENVFILE%' .env
                    '''
                }
            }
        }

        stage('Build Docker') {
            steps {
                bat 'docker build -t my-node-app .'
            }
        }

        stage('Deploy') {
            steps {
                bat '''
                docker run --env-file .env -d -p 3000:3000 my-node-app
                docker ps
                '''
            }
        }
    }
}