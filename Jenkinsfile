pipeline {
    agent any

    environment {
        IMAGE_NAME = "feliz-events-app"
        CONTAINER_NAME = "feliz-events-container"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'master', url: 'https://github.com/<your-username>/<repo-name>.git'
            }
        }

        stage('Build Project') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t ${IMAGE_NAME} .'
            }
        }

        stage('Deploy Container') {
            steps {
                script {
                    // Stop old container if running
                    sh '''
                    if [ "$(docker ps -q -f name=${CONTAINER_NAME})" ]; then
                        docker stop ${CONTAINER_NAME}
                        docker rm ${CONTAINER_NAME}
                    fi
                    docker run -d -p 80:80 --name ${CONTAINER_NAME} ${IMAGE_NAME}
                    '''
                }
            }
        }
    }

    post {
        success {
            echo '✅ Deployment Successful!'
        }
        failure {
            echo '❌ Build or Deployment Failed!'
        }
    }
}
