pipeline {
  agent any
  
  stages {
    stage("Deploy") {
      when { branch pattern: "^master\$", comparator: "REGEXP"}
      steps { sh "Deployed to prod" }
    }
  }
}
