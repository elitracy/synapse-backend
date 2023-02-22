export type AmplifyDependentResourcesAttributes = {
  "api": {
    "rest": {
      "ApiId": "string",
      "ApiName": "string",
      "RootUrl": "string"
    },
    "synapsebackend": {
      "GraphQLAPIEndpointOutput": "string",
      "GraphQLAPIIdOutput": "string",
      "GraphQLAPIKeyOutput": "string"
    }
  },
  "function": {
    "rest": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  }
}