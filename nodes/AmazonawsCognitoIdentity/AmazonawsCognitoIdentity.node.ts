import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { defaultDescription } from './resources/default';

export class AmazonawsCognitoIdentity implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'amazonaws-cognito-identity',
		name: 'N8nDevAmazonawsCognitoIdentity',
		icon: { light: 'file:./amazonaws-cognito-identity.png', dark: 'file:./amazonaws-cognito-identity.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Amazon Cognito Federated Identities Amazon Cognito Federated Identities is a web service that delivers scoped temporary credentials to mobile devices and other untrusted env..',
		defaults: { name: 'amazonaws-cognito-identity' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevAmazonawsCognitoIdentityApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Default",
					"value": "Default",
					"description": ""
				}
			],
			"default": ""
		},
		...defaultDescription
		],
	};
}
