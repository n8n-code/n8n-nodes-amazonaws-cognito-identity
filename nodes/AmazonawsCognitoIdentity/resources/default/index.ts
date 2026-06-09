import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "Create Identity Pool",
					"value": "Create Identity Pool",
					"action": "Create Identity Pool",
					"description": "<p>Creates a new identity pool. The identity pool is a store of user identity information that is specific to your AWS account. The keys for <code>SupportedLoginProviders</code> are as follows:</p> <ul> <li> <p>Facebook: <code>graph.facebook.com</code> </p> </li> <li> <p>Google: <code>accounts.google.com</code> </p> </li> <li> <p>Amazon: <code>www.amazon.com</code> </p> </li> <li> <p>Twitter: <code>api.twitter.com</code> </p> </li> <li> <p>Digits: <code>www.digits.com</code> </p> </li> </ul> <p>You must use AWS Developer credentials to call this API.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSCognitoIdentityService.CreateIdentityPool"
						}
					}
				},
				{
					"name": "Delete Identities",
					"value": "Delete Identities",
					"action": "Delete Identities",
					"description": "<p>Deletes identities from an identity pool. You can specify a list of 1-60 identities that you want to delete.</p> <p>You must use AWS Developer credentials to call this API.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSCognitoIdentityService.DeleteIdentities"
						}
					}
				},
				{
					"name": "Delete Identity Pool",
					"value": "Delete Identity Pool",
					"action": "Delete Identity Pool",
					"description": "<p>Deletes an identity pool. Once a pool is deleted, users will not be able to authenticate with the pool.</p> <p>You must use AWS Developer credentials to call this API.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSCognitoIdentityService.DeleteIdentityPool"
						}
					}
				},
				{
					"name": "Describe Identity",
					"value": "Describe Identity",
					"action": "Describe Identity",
					"description": "<p>Returns metadata related to the given identity, including when the identity was created and any associated linked logins.</p> <p>You must use AWS Developer credentials to call this API.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSCognitoIdentityService.DescribeIdentity"
						}
					}
				},
				{
					"name": "Describe Identity Pool",
					"value": "Describe Identity Pool",
					"action": "Describe Identity Pool",
					"description": "<p>Gets details about a particular identity pool, including the pool name, ID description, creation date, and current number of users.</p> <p>You must use AWS Developer credentials to call this API.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSCognitoIdentityService.DescribeIdentityPool"
						}
					}
				},
				{
					"name": "Get Credentials For Identity",
					"value": "Get Credentials For Identity",
					"action": "Get Credentials For Identity",
					"description": "<p>Returns credentials for the provided identity ID. Any provided logins will be validated against supported login providers. If the token is for cognito-identity.amazonaws.com, it will be passed through to AWS Security Token Service with the appropriate role for the token.</p> <p>This is a public API. You do not need any credentials to call this API.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSCognitoIdentityService.GetCredentialsForIdentity"
						}
					}
				},
				{
					"name": "Get Id",
					"value": "Get Id",
					"action": "Get Id",
					"description": "<p>Generates (or retrieves) a Cognito ID. Supplying multiple logins will create an implicit linked account.</p> <p>This is a public API. You do not need any credentials to call this API.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSCognitoIdentityService.GetId"
						}
					}
				},
				{
					"name": "Get Identity Pool Roles",
					"value": "Get Identity Pool Roles",
					"action": "Get Identity Pool Roles",
					"description": "<p>Gets the roles for an identity pool.</p> <p>You must use AWS Developer credentials to call this API.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSCognitoIdentityService.GetIdentityPoolRoles"
						}
					}
				},
				{
					"name": "Get Open Id Token",
					"value": "Get Open Id Token",
					"action": "Get Open Id Token",
					"description": "<p>Gets an OpenID token, using a known Cognito ID. This known Cognito ID is returned by <a>GetId</a>. You can optionally add additional logins for the identity. Supplying multiple logins creates an implicit link.</p> <p>The OpenID token is valid for 10 minutes.</p> <p>This is a public API. You do not need any credentials to call this API.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSCognitoIdentityService.GetOpenIdToken"
						}
					}
				},
				{
					"name": "Get Open Id Token For Developer Identity",
					"value": "Get Open Id Token For Developer Identity",
					"action": "Get Open Id Token For Developer Identity",
					"description": "<p>Registers (or retrieves) a Cognito <code>IdentityId</code> and an OpenID Connect token for a user authenticated by your backend authentication process. Supplying multiple logins will create an implicit linked account. You can only specify one developer provider as part of the <code>Logins</code> map, which is linked to the identity pool. The developer provider is the \"domain\" by which Cognito will refer to your users.</p> <p>You can use <code>GetOpenIdTokenForDeveloperIdentity</code> to create a new identity and to link new logins (that is, user credentials issued by a public provider or developer provider) to an existing identity. When you want to create a new identity, the <code>IdentityId</code> should be null. When you want to associate a new login with an existing authenticated/unauthenticated identity, you can do so by providing the existing <code>IdentityId</code>. This API will create the identity in the specified <code>IdentityPoolId</code>.</p> <p>You must use AWS Developer credentials to call this API.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSCognitoIdentityService.GetOpenIdTokenForDeveloperIdentity"
						}
					}
				},
				{
					"name": "Get Principal Tag Attribute Map",
					"value": "Get Principal Tag Attribute Map",
					"action": "Get Principal Tag Attribute Map",
					"description": "Use <code>GetPrincipalTagAttributeMap</code> to list all mappings between <code>PrincipalTags</code> and user attributes.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSCognitoIdentityService.GetPrincipalTagAttributeMap"
						}
					}
				},
				{
					"name": "List Identities",
					"value": "List Identities",
					"action": "List Identities",
					"description": "<p>Lists the identities in an identity pool.</p> <p>You must use AWS Developer credentials to call this API.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSCognitoIdentityService.ListIdentities"
						}
					}
				},
				{
					"name": "List Identity Pools",
					"value": "List Identity Pools",
					"action": "List Identity Pools",
					"description": "<p>Lists all of the Cognito identity pools registered for your account.</p> <p>You must use AWS Developer credentials to call this API.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSCognitoIdentityService.ListIdentityPools"
						}
					}
				},
				{
					"name": "List Tags For Resource",
					"value": "List Tags For Resource",
					"action": "List Tags For Resource",
					"description": "<p>Lists the tags that are assigned to an Amazon Cognito identity pool.</p> <p>A tag is a label that you can apply to identity pools to categorize and manage them in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>You can use this action up to 10 times per second, per account.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSCognitoIdentityService.ListTagsForResource"
						}
					}
				},
				{
					"name": "Lookup Developer Identity",
					"value": "Lookup Developer Identity",
					"action": "Lookup Developer Identity",
					"description": "<p>Retrieves the <code>IdentityID</code> associated with a <code>DeveloperUserIdentifier</code> or the list of <code>DeveloperUserIdentifier</code> values associated with an <code>IdentityId</code> for an existing identity. Either <code>IdentityID</code> or <code>DeveloperUserIdentifier</code> must not be null. If you supply only one of these values, the other value will be searched in the database and returned as a part of the response. If you supply both, <code>DeveloperUserIdentifier</code> will be matched against <code>IdentityID</code>. If the values are verified against the database, the response returns both values and is the same as the request. Otherwise a <code>ResourceConflictException</code> is thrown.</p> <p> <code>LookupDeveloperIdentity</code> is intended for low-throughput control plane operations: for example, to enable customer service to locate an identity ID by username. If you are using it for higher-volume operations such as user authentication, your requests are likely to be throttled. <a>GetOpenIdTokenForDeveloperIdentity</a> is a better option for higher-volume operations for user authentication.</p> <p>You must use AWS Developer credentials to call this API.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSCognitoIdentityService.LookupDeveloperIdentity"
						}
					}
				},
				{
					"name": "Merge Developer Identities",
					"value": "Merge Developer Identities",
					"action": "Merge Developer Identities",
					"description": "<p>Merges two users having different <code>IdentityId</code>s, existing in the same identity pool, and identified by the same developer provider. You can use this action to request that discrete users be merged and identified as a single user in the Cognito environment. Cognito associates the given source user (<code>SourceUserIdentifier</code>) with the <code>IdentityId</code> of the <code>DestinationUserIdentifier</code>. Only developer-authenticated users can be merged. If the users to be merged are associated with the same public provider, but as two different users, an exception will be thrown.</p> <p>The number of linked logins is limited to 20. So, the number of linked logins for the source user, <code>SourceUserIdentifier</code>, and the destination user, <code>DestinationUserIdentifier</code>, together should not be larger than 20. Otherwise, an exception will be thrown.</p> <p>You must use AWS Developer credentials to call this API.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSCognitoIdentityService.MergeDeveloperIdentities"
						}
					}
				},
				{
					"name": "Set Identity Pool Roles",
					"value": "Set Identity Pool Roles",
					"action": "Set Identity Pool Roles",
					"description": "<p>Sets the roles for an identity pool. These roles are used when making calls to <a>GetCredentialsForIdentity</a> action.</p> <p>You must use AWS Developer credentials to call this API.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSCognitoIdentityService.SetIdentityPoolRoles"
						}
					}
				},
				{
					"name": "Set Principal Tag Attribute Map",
					"value": "Set Principal Tag Attribute Map",
					"action": "Set Principal Tag Attribute Map",
					"description": "You can use this operation to use default (username and clientID) attribute or custom attribute mappings.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSCognitoIdentityService.SetPrincipalTagAttributeMap"
						}
					}
				},
				{
					"name": "Tag Resource",
					"value": "Tag Resource",
					"action": "Tag Resource",
					"description": "<p>Assigns a set of tags to the specified Amazon Cognito identity pool. A tag is a label that you can use to categorize and manage identity pools in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>Each tag consists of a key and value, both of which you define. A key is a general category for more specific values. For example, if you have two versions of an identity pool, one for testing and another for production, you might assign an <code>Environment</code> tag key to both identity pools. The value of this key might be <code>Test</code> for one identity pool and <code>Production</code> for the other.</p> <p>Tags are useful for cost tracking and access control. You can activate your tags so that they appear on the Billing and Cost Management console, where you can track the costs associated with your identity pools. In an IAM policy, you can constrain permissions for identity pools based on specific tags or tag values.</p> <p>You can use this action up to 5 times per second, per account. An identity pool can have as many as 50 tags.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSCognitoIdentityService.TagResource"
						}
					}
				},
				{
					"name": "Unlink Developer Identity",
					"value": "Unlink Developer Identity",
					"action": "Unlink Developer Identity",
					"description": "<p>Unlinks a <code>DeveloperUserIdentifier</code> from an existing identity. Unlinked developer users will be considered new identities next time they are seen. If, for a given Cognito identity, you remove all federated identities as well as the developer user identifier, the Cognito identity becomes inaccessible.</p> <p>You must use AWS Developer credentials to call this API.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSCognitoIdentityService.UnlinkDeveloperIdentity"
						}
					}
				},
				{
					"name": "Unlink Identity",
					"value": "Unlink Identity",
					"action": "Unlink Identity",
					"description": "<p>Unlinks a federated identity from an existing account. Unlinked logins will be considered new identities next time they are seen. Removing the last linked login will make this identity inaccessible.</p> <p>This is a public API. You do not need any credentials to call this API.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSCognitoIdentityService.UnlinkIdentity"
						}
					}
				},
				{
					"name": "Untag Resource",
					"value": "Untag Resource",
					"action": "Untag Resource",
					"description": "Removes the specified tags from the specified Amazon Cognito identity pool. You can use this action up to 5 times per second, per account",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSCognitoIdentityService.UntagResource"
						}
					}
				},
				{
					"name": "Update Identity Pool",
					"value": "Update Identity Pool",
					"action": "Update Identity Pool",
					"description": "<p>Updates an identity pool.</p> <p>You must use AWS Developer credentials to call this API.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSCognitoIdentityService.UpdateIdentityPool"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSCognitoIdentityService.CreateIdentityPool",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Identity Pool"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSCognitoIdentityService.CreateIdentityPool",
			"type": "options",
			"options": [
				{
					"name": "AWS Cognito Identity Service Create Identity Pool",
					"value": "AWSCognitoIdentityService.CreateIdentityPool"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Identity Pool"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Identity Pool Name",
			"name": "IdentityPoolName",
			"type": "string",
			"default": "",
			"description": "A string that you provide.",
			"routing": {
				"send": {
					"property": "IdentityPoolName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Identity Pool"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Allow Unauthenticated Identities",
			"name": "AllowUnauthenticatedIdentities",
			"type": "boolean",
			"default": true,
			"description": "TRUE if the identity pool supports unauthenticated logins.",
			"routing": {
				"send": {
					"property": "AllowUnauthenticatedIdentities",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Identity Pool"
					]
				}
			}
		},
		{
			"displayName": "Allow Classic Flow",
			"name": "AllowClassicFlow",
			"type": "boolean",
			"default": true,
			"description": "Enables or disables the Basic (Classic) authentication flow. For more information, see <a href=\"https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flow.html\">Identity Pools (Federated Identities) Authentication Flow</a> in the <i>Amazon Cognito Developer Guide</i>.",
			"routing": {
				"send": {
					"property": "AllowClassicFlow",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Identity Pool"
					]
				}
			}
		},
		{
			"displayName": "Supported Login Providers",
			"name": "SupportedLoginProviders",
			"type": "json",
			"default": "{}",
			"description": "Optional key:value pairs mapping provider names to provider app IDs.",
			"routing": {
				"send": {
					"property": "SupportedLoginProviders",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Identity Pool"
					]
				}
			}
		},
		{
			"displayName": "Developer Provider Name",
			"name": "DeveloperProviderName",
			"type": "string",
			"default": "",
			"description": "<p>The \"domain\" by which Cognito will refer to your users. This name acts as a placeholder that allows your backend and the Cognito service to communicate about the developer provider. For the <code>DeveloperProviderName</code>, you can use letters as well as period (<code>.</code>), underscore (<code>_</code>), and dash (<code>-</code>).</p> <p>Once you have set a developer provider name, you cannot change it. Please take care in setting this parameter.</p>",
			"routing": {
				"send": {
					"property": "DeveloperProviderName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Identity Pool"
					]
				}
			}
		},
		{
			"displayName": "Open Id Connect Provider AR Ns",
			"name": "OpenIdConnectProviderARNs",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The Amazon Resource Names (ARN) of the OpenID Connect providers.",
			"routing": {
				"send": {
					"property": "OpenIdConnectProviderARNs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Identity Pool"
					]
				}
			}
		},
		{
			"displayName": "Cognito Identity Providers",
			"name": "CognitoIdentityProviders",
			"type": "json",
			"default": "[\n  {\n    \"ClientId\": {},\n    \"ServerSideTokenCheck\": {}\n  }\n]",
			"description": "An array of Amazon Cognito user pools and their client IDs.",
			"routing": {
				"send": {
					"property": "CognitoIdentityProviders",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Identity Pool"
					]
				}
			}
		},
		{
			"displayName": "Saml Provider AR Ns",
			"name": "SamlProviderARNs",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "An array of Amazon Resource Names (ARNs) of the SAML provider for your identity pool.",
			"routing": {
				"send": {
					"property": "SamlProviderARNs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Identity Pool"
					]
				}
			}
		},
		{
			"displayName": "Identity Pool Tags",
			"name": "IdentityPoolTags",
			"type": "json",
			"default": "{}",
			"description": "Tags to assign to the identity pool. A tag is a label that you can apply to identity pools to categorize and manage them in different ways, such as by purpose, owner, environment, or other criteria.",
			"routing": {
				"send": {
					"property": "IdentityPoolTags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Identity Pool"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Identity Pool"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSCognitoIdentityService.DeleteIdentities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Identities"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSCognitoIdentityService.DeleteIdentities",
			"type": "options",
			"options": [
				{
					"name": "AWS Cognito Identity Service Delete Identities",
					"value": "AWSCognitoIdentityService.DeleteIdentities"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Identities"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Identity Ids To Delete",
			"name": "IdentityIdsToDelete",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A list of 1-60 identities that you want to delete.",
			"routing": {
				"send": {
					"property": "IdentityIdsToDelete",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Identities"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Identities"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSCognitoIdentityService.DeleteIdentityPool",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Identity Pool"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSCognitoIdentityService.DeleteIdentityPool",
			"type": "options",
			"options": [
				{
					"name": "AWS Cognito Identity Service Delete Identity Pool",
					"value": "AWSCognitoIdentityService.DeleteIdentityPool"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Identity Pool"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Identity Pool Id",
			"name": "IdentityPoolId",
			"type": "string",
			"default": "",
			"description": "An identity pool ID in the format REGION:GUID.",
			"routing": {
				"send": {
					"property": "IdentityPoolId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Identity Pool"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Identity Pool"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSCognitoIdentityService.DescribeIdentity",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Identity"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSCognitoIdentityService.DescribeIdentity",
			"type": "options",
			"options": [
				{
					"name": "AWS Cognito Identity Service Describe Identity",
					"value": "AWSCognitoIdentityService.DescribeIdentity"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Identity"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Identity Id",
			"name": "IdentityId",
			"type": "string",
			"default": "",
			"description": "A unique identifier in the format REGION:GUID.",
			"routing": {
				"send": {
					"property": "IdentityId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Identity"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Identity"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSCognitoIdentityService.DescribeIdentityPool",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Identity Pool"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSCognitoIdentityService.DescribeIdentityPool",
			"type": "options",
			"options": [
				{
					"name": "AWS Cognito Identity Service Describe Identity Pool",
					"value": "AWSCognitoIdentityService.DescribeIdentityPool"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Identity Pool"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Identity Pool Id",
			"name": "IdentityPoolId",
			"type": "string",
			"default": "",
			"description": "An identity pool ID in the format REGION:GUID.",
			"routing": {
				"send": {
					"property": "IdentityPoolId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Identity Pool"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Identity Pool"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSCognitoIdentityService.GetCredentialsForIdentity",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Credentials For Identity"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSCognitoIdentityService.GetCredentialsForIdentity",
			"type": "options",
			"options": [
				{
					"name": "AWS Cognito Identity Service Get Credentials For Identity",
					"value": "AWSCognitoIdentityService.GetCredentialsForIdentity"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Credentials For Identity"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Identity Id",
			"name": "IdentityId",
			"type": "string",
			"default": "",
			"description": "A unique identifier in the format REGION:GUID.",
			"routing": {
				"send": {
					"property": "IdentityId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Credentials For Identity"
					]
				}
			}
		},
		{
			"displayName": "Logins",
			"name": "Logins",
			"type": "json",
			"default": "{}",
			"description": "<p>A set of optional name-value pairs that map provider names to provider tokens. The name-value pair will follow the syntax \"provider_name\": \"provider_user_identifier\".</p> <p>Logins should not be specified when trying to get credentials for an unauthenticated identity.</p> <p>The Logins parameter is required when using identities associated with external identity providers such as Facebook. For examples of <code>Logins</code> maps, see the code examples in the <a href=\"https://docs.aws.amazon.com/cognito/latest/developerguide/external-identity-providers.html\">External Identity Providers</a> section of the Amazon Cognito Developer Guide.</p>",
			"routing": {
				"send": {
					"property": "Logins",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Credentials For Identity"
					]
				}
			}
		},
		{
			"displayName": "Custom Role Arn",
			"name": "CustomRoleArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) of the role to be assumed when multiple roles were received in the token from the identity provider. For example, a SAML-based identity provider. This parameter is optional for identity providers that do not support role customization.",
			"routing": {
				"send": {
					"property": "CustomRoleArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Credentials For Identity"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Credentials For Identity"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSCognitoIdentityService.GetId",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Id"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSCognitoIdentityService.GetId",
			"type": "options",
			"options": [
				{
					"name": "AWS Cognito Identity Service Get Id",
					"value": "AWSCognitoIdentityService.GetId"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Id"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "AccountId",
			"type": "string",
			"default": "",
			"description": "A standard AWS account ID (9+ digits).",
			"routing": {
				"send": {
					"property": "AccountId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Id"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Identity Pool Id",
			"name": "IdentityPoolId",
			"type": "string",
			"default": "",
			"description": "An identity pool ID in the format REGION:GUID.",
			"routing": {
				"send": {
					"property": "IdentityPoolId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Id"
					]
				}
			}
		},
		{
			"displayName": "Logins",
			"name": "Logins",
			"type": "json",
			"default": "{}",
			"description": "<p>A set of optional name-value pairs that map provider names to provider tokens. The available provider names for <code>Logins</code> are as follows:</p> <ul> <li> <p>Facebook: <code>graph.facebook.com</code> </p> </li> <li> <p>Amazon Cognito user pool: <code>cognito-idp.&lt;region&gt;.amazonaws.com/&lt;YOUR_USER_POOL_ID&gt;</code>, for example, <code>cognito-idp.us-east-1.amazonaws.com/us-east-1_123456789</code>. </p> </li> <li> <p>Google: <code>accounts.google.com</code> </p> </li> <li> <p>Amazon: <code>www.amazon.com</code> </p> </li> <li> <p>Twitter: <code>api.twitter.com</code> </p> </li> <li> <p>Digits: <code>www.digits.com</code> </p> </li> </ul>",
			"routing": {
				"send": {
					"property": "Logins",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Id"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Id"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSCognitoIdentityService.GetIdentityPoolRoles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Identity Pool Roles"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSCognitoIdentityService.GetIdentityPoolRoles",
			"type": "options",
			"options": [
				{
					"name": "AWS Cognito Identity Service Get Identity Pool Roles",
					"value": "AWSCognitoIdentityService.GetIdentityPoolRoles"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Identity Pool Roles"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Identity Pool Id",
			"name": "IdentityPoolId",
			"type": "string",
			"default": "",
			"description": "An identity pool ID in the format REGION:GUID.",
			"routing": {
				"send": {
					"property": "IdentityPoolId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Identity Pool Roles"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Identity Pool Roles"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSCognitoIdentityService.GetOpenIdToken",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Open Id Token"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSCognitoIdentityService.GetOpenIdToken",
			"type": "options",
			"options": [
				{
					"name": "AWS Cognito Identity Service Get Open Id Token",
					"value": "AWSCognitoIdentityService.GetOpenIdToken"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Open Id Token"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Identity Id",
			"name": "IdentityId",
			"type": "string",
			"default": "",
			"description": "A unique identifier in the format REGION:GUID.",
			"routing": {
				"send": {
					"property": "IdentityId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Open Id Token"
					]
				}
			}
		},
		{
			"displayName": "Logins",
			"name": "Logins",
			"type": "json",
			"default": "{}",
			"description": "A set of optional name-value pairs that map provider names to provider tokens. When using graph.facebook.com and www.amazon.com, supply the access_token returned from the provider's authflow. For accounts.google.com, an Amazon Cognito user pool provider, or any other OpenID Connect provider, always include the <code>id_token</code>.",
			"routing": {
				"send": {
					"property": "Logins",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Open Id Token"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Open Id Token"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSCognitoIdentityService.GetOpenIdTokenForDeveloperIdentity",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Open Id Token For Developer Identity"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSCognitoIdentityService.GetOpenIdTokenForDeveloperIdentity",
			"type": "options",
			"options": [
				{
					"name": "AWS Cognito Identity Service Get Open Id Token For Developer Identity",
					"value": "AWSCognitoIdentityService.GetOpenIdTokenForDeveloperIdentity"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Open Id Token For Developer Identity"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Identity Pool Id",
			"name": "IdentityPoolId",
			"type": "string",
			"default": "",
			"description": "An identity pool ID in the format REGION:GUID.",
			"routing": {
				"send": {
					"property": "IdentityPoolId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Open Id Token For Developer Identity"
					]
				}
			}
		},
		{
			"displayName": "Identity Id",
			"name": "IdentityId",
			"type": "string",
			"default": "",
			"description": "A unique identifier in the format REGION:GUID.",
			"routing": {
				"send": {
					"property": "IdentityId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Open Id Token For Developer Identity"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Logins",
			"name": "Logins",
			"type": "json",
			"default": "{}",
			"description": "A set of optional name-value pairs that map provider names to provider tokens. Each name-value pair represents a user from a public provider or developer provider. If the user is from a developer provider, the name-value pair will follow the syntax <code>\"developer_provider_name\": \"developer_user_identifier\"</code>. The developer provider is the \"domain\" by which Cognito will refer to your users; you provided this domain while creating/updating the identity pool. The developer user identifier is an identifier from your backend that uniquely identifies a user. When you create an identity pool, you can specify the supported logins.",
			"routing": {
				"send": {
					"property": "Logins",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Open Id Token For Developer Identity"
					]
				}
			}
		},
		{
			"displayName": "Principal Tags",
			"name": "PrincipalTags",
			"type": "json",
			"default": "{}",
			"description": "Use this operation to configure attribute mappings for custom providers. ",
			"routing": {
				"send": {
					"property": "PrincipalTags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Open Id Token For Developer Identity"
					]
				}
			}
		},
		{
			"displayName": "Token Duration",
			"name": "TokenDuration",
			"type": "number",
			"default": 0,
			"description": "<p>The expiration time of the token, in seconds. You can specify a custom expiration time for the token so that you can cache it. If you don't provide an expiration time, the token is valid for 15 minutes. You can exchange the token with Amazon STS for temporary AWS credentials, which are valid for a maximum of one hour. The maximum token duration you can set is 24 hours. You should take care in setting the expiration time for a token, as there are significant security implications: an attacker could use a leaked token to access your AWS resources for the token's duration.</p> <note> <p>Please provide for a small grace period, usually no more than 5 minutes, to account for clock skew.</p> </note>",
			"routing": {
				"send": {
					"property": "TokenDuration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Open Id Token For Developer Identity"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Open Id Token For Developer Identity"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSCognitoIdentityService.GetPrincipalTagAttributeMap",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Principal Tag Attribute Map"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSCognitoIdentityService.GetPrincipalTagAttributeMap",
			"type": "options",
			"options": [
				{
					"name": "AWS Cognito Identity Service Get Principal Tag Attribute Map",
					"value": "AWSCognitoIdentityService.GetPrincipalTagAttributeMap"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Principal Tag Attribute Map"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Identity Pool Id",
			"name": "IdentityPoolId",
			"type": "string",
			"default": "",
			"description": "You can use this operation to get the ID of the Identity Pool you setup attribute mappings for.",
			"routing": {
				"send": {
					"property": "IdentityPoolId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Principal Tag Attribute Map"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Identity Provider Name",
			"name": "IdentityProviderName",
			"type": "string",
			"default": "",
			"description": "You can use this operation to get the provider name.",
			"routing": {
				"send": {
					"property": "IdentityProviderName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Principal Tag Attribute Map"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Principal Tag Attribute Map"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSCognitoIdentityService.ListIdentities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Identities"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSCognitoIdentityService.ListIdentities",
			"type": "options",
			"options": [
				{
					"name": "AWS Cognito Identity Service List Identities",
					"value": "AWSCognitoIdentityService.ListIdentities"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Identities"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Identity Pool Id",
			"name": "IdentityPoolId",
			"type": "string",
			"default": "",
			"description": "An identity pool ID in the format REGION:GUID.",
			"routing": {
				"send": {
					"property": "IdentityPoolId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Identities"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "The maximum number of identities to return.",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Identities"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "A pagination token.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Identities"
					]
				}
			}
		},
		{
			"displayName": "Hide Disabled",
			"name": "HideDisabled",
			"type": "boolean",
			"default": true,
			"description": "An optional boolean parameter that allows you to hide disabled identities. If omitted, the ListIdentities API will include disabled identities in the response.",
			"routing": {
				"send": {
					"property": "HideDisabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Identities"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Identities"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSCognitoIdentityService.ListIdentityPools",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Identity Pools"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Identity Pools"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Identity Pools"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSCognitoIdentityService.ListIdentityPools",
			"type": "options",
			"options": [
				{
					"name": "AWS Cognito Identity Service List Identity Pools",
					"value": "AWSCognitoIdentityService.ListIdentityPools"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Identity Pools"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "The maximum number of identities to return.",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Identity Pools"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "A pagination token.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Identity Pools"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Identity Pools"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSCognitoIdentityService.ListTagsForResource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags For Resource"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSCognitoIdentityService.ListTagsForResource",
			"type": "options",
			"options": [
				{
					"name": "AWS Cognito Identity Service List Tags For Resource",
					"value": "AWSCognitoIdentityService.ListTagsForResource"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags For Resource"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resource Arn",
			"name": "ResourceArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) of the identity pool that the tags are assigned to.",
			"routing": {
				"send": {
					"property": "ResourceArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags For Resource"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags For Resource"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSCognitoIdentityService.LookupDeveloperIdentity",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Lookup Developer Identity"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSCognitoIdentityService.LookupDeveloperIdentity",
			"type": "options",
			"options": [
				{
					"name": "AWS Cognito Identity Service Lookup Developer Identity",
					"value": "AWSCognitoIdentityService.LookupDeveloperIdentity"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Lookup Developer Identity"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Identity Pool Id",
			"name": "IdentityPoolId",
			"type": "string",
			"default": "",
			"description": "An identity pool ID in the format REGION:GUID.",
			"routing": {
				"send": {
					"property": "IdentityPoolId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Lookup Developer Identity"
					]
				}
			}
		},
		{
			"displayName": "Identity Id",
			"name": "IdentityId",
			"type": "string",
			"default": "",
			"description": "A unique identifier in the format REGION:GUID.",
			"routing": {
				"send": {
					"property": "IdentityId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Lookup Developer Identity"
					]
				}
			}
		},
		{
			"displayName": "Developer User Identifier",
			"name": "DeveloperUserIdentifier",
			"type": "string",
			"default": "",
			"description": "A unique ID used by your backend authentication process to identify a user. Typically, a developer identity provider would issue many developer user identifiers, in keeping with the number of users.",
			"routing": {
				"send": {
					"property": "DeveloperUserIdentifier",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Lookup Developer Identity"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "The maximum number of identities to return.",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Lookup Developer Identity"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "A pagination token. The first call you make will have <code>NextToken</code> set to null. After that the service will return <code>NextToken</code> values as needed. For example, let's say you make a request with <code>MaxResults</code> set to 10, and there are 20 matches in the database. The service will return a pagination token as a part of the response. This token can be used to call the API again and get results starting from the 11th match.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Lookup Developer Identity"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Lookup Developer Identity"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSCognitoIdentityService.MergeDeveloperIdentities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Merge Developer Identities"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSCognitoIdentityService.MergeDeveloperIdentities",
			"type": "options",
			"options": [
				{
					"name": "AWS Cognito Identity Service Merge Developer Identities",
					"value": "AWSCognitoIdentityService.MergeDeveloperIdentities"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Merge Developer Identities"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Source User Identifier",
			"name": "SourceUserIdentifier",
			"type": "string",
			"default": "",
			"description": "User identifier for the source user. The value should be a <code>DeveloperUserIdentifier</code>.",
			"routing": {
				"send": {
					"property": "SourceUserIdentifier",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Merge Developer Identities"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Destination User Identifier",
			"name": "DestinationUserIdentifier",
			"type": "string",
			"default": "",
			"description": "User identifier for the destination user. The value should be a <code>DeveloperUserIdentifier</code>.",
			"routing": {
				"send": {
					"property": "DestinationUserIdentifier",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Merge Developer Identities"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Developer Provider Name",
			"name": "DeveloperProviderName",
			"type": "string",
			"default": "",
			"description": "The \"domain\" by which Cognito will refer to your users. This is a (pseudo) domain name that you provide while creating an identity pool. This name acts as a placeholder that allows your backend and the Cognito service to communicate about the developer provider. For the <code>DeveloperProviderName</code>, you can use letters as well as period (.), underscore (_), and dash (-).",
			"routing": {
				"send": {
					"property": "DeveloperProviderName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Merge Developer Identities"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Identity Pool Id",
			"name": "IdentityPoolId",
			"type": "string",
			"default": "",
			"description": "An identity pool ID in the format REGION:GUID.",
			"routing": {
				"send": {
					"property": "IdentityPoolId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Merge Developer Identities"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Merge Developer Identities"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSCognitoIdentityService.SetIdentityPoolRoles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Set Identity Pool Roles"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSCognitoIdentityService.SetIdentityPoolRoles",
			"type": "options",
			"options": [
				{
					"name": "AWS Cognito Identity Service Set Identity Pool Roles",
					"value": "AWSCognitoIdentityService.SetIdentityPoolRoles"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Set Identity Pool Roles"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Identity Pool Id",
			"name": "IdentityPoolId",
			"type": "string",
			"default": "",
			"description": "An identity pool ID in the format REGION:GUID.",
			"routing": {
				"send": {
					"property": "IdentityPoolId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Set Identity Pool Roles"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Roles",
			"name": "Roles",
			"type": "json",
			"default": "{}",
			"description": "The map of roles associated with this pool. For a given role, the key will be either \"authenticated\" or \"unauthenticated\" and the value will be the Role ARN.",
			"routing": {
				"send": {
					"property": "Roles",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Set Identity Pool Roles"
					]
				}
			}
		},
		{
			"displayName": "Role Mappings",
			"name": "RoleMappings",
			"type": "json",
			"default": "{}",
			"description": "<p>How users for a specific identity provider are to mapped to roles. This is a string to <a>RoleMapping</a> object map. The string identifies the identity provider, for example, \"graph.facebook.com\" or \"cognito-idp.us-east-1.amazonaws.com/us-east-1_abcdefghi:app_client_id\".</p> <p>Up to 25 rules can be specified per identity provider.</p>",
			"routing": {
				"send": {
					"property": "RoleMappings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Set Identity Pool Roles"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Set Identity Pool Roles"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSCognitoIdentityService.SetPrincipalTagAttributeMap",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Set Principal Tag Attribute Map"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSCognitoIdentityService.SetPrincipalTagAttributeMap",
			"type": "options",
			"options": [
				{
					"name": "AWS Cognito Identity Service Set Principal Tag Attribute Map",
					"value": "AWSCognitoIdentityService.SetPrincipalTagAttributeMap"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Set Principal Tag Attribute Map"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Identity Pool Id",
			"name": "IdentityPoolId",
			"type": "string",
			"default": "",
			"description": "The ID of the Identity Pool you want to set attribute mappings for.",
			"routing": {
				"send": {
					"property": "IdentityPoolId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Set Principal Tag Attribute Map"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Identity Provider Name",
			"name": "IdentityProviderName",
			"type": "string",
			"default": "",
			"description": "The provider name you want to use for attribute mappings.",
			"routing": {
				"send": {
					"property": "IdentityProviderName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Set Principal Tag Attribute Map"
					]
				}
			}
		},
		{
			"displayName": "Use Defaults",
			"name": "UseDefaults",
			"type": "boolean",
			"default": true,
			"description": "You can use this operation to use default (username and clientID) attribute mappings.",
			"routing": {
				"send": {
					"property": "UseDefaults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Set Principal Tag Attribute Map"
					]
				}
			}
		},
		{
			"displayName": "Principal Tags",
			"name": "PrincipalTags",
			"type": "json",
			"default": "{}",
			"description": "You can use this operation to add principal tags.",
			"routing": {
				"send": {
					"property": "PrincipalTags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Set Principal Tag Attribute Map"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Set Principal Tag Attribute Map"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSCognitoIdentityService.TagResource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSCognitoIdentityService.TagResource",
			"type": "options",
			"options": [
				{
					"name": "AWS Cognito Identity Service Tag Resource",
					"value": "AWSCognitoIdentityService.TagResource"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resource Arn",
			"name": "ResourceArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) of the identity pool.",
			"routing": {
				"send": {
					"property": "ResourceArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Tags",
			"name": "Tags",
			"type": "json",
			"default": "{}",
			"description": "The tags to assign to the identity pool.",
			"routing": {
				"send": {
					"property": "Tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSCognitoIdentityService.UnlinkDeveloperIdentity",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Unlink Developer Identity"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSCognitoIdentityService.UnlinkDeveloperIdentity",
			"type": "options",
			"options": [
				{
					"name": "AWS Cognito Identity Service Unlink Developer Identity",
					"value": "AWSCognitoIdentityService.UnlinkDeveloperIdentity"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Unlink Developer Identity"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Identity Id",
			"name": "IdentityId",
			"type": "string",
			"default": "",
			"description": "A unique identifier in the format REGION:GUID.",
			"routing": {
				"send": {
					"property": "IdentityId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Unlink Developer Identity"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Identity Pool Id",
			"name": "IdentityPoolId",
			"type": "string",
			"default": "",
			"description": "An identity pool ID in the format REGION:GUID.",
			"routing": {
				"send": {
					"property": "IdentityPoolId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Unlink Developer Identity"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Developer Provider Name",
			"name": "DeveloperProviderName",
			"type": "string",
			"default": "",
			"description": "The \"domain\" by which Cognito will refer to your users.",
			"routing": {
				"send": {
					"property": "DeveloperProviderName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Unlink Developer Identity"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Developer User Identifier",
			"name": "DeveloperUserIdentifier",
			"type": "string",
			"default": "",
			"description": "A unique ID used by your backend authentication process to identify a user.",
			"routing": {
				"send": {
					"property": "DeveloperUserIdentifier",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Unlink Developer Identity"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Unlink Developer Identity"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSCognitoIdentityService.UnlinkIdentity",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Unlink Identity"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSCognitoIdentityService.UnlinkIdentity",
			"type": "options",
			"options": [
				{
					"name": "AWS Cognito Identity Service Unlink Identity",
					"value": "AWSCognitoIdentityService.UnlinkIdentity"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Unlink Identity"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Identity Id",
			"name": "IdentityId",
			"type": "string",
			"default": "",
			"description": "A unique identifier in the format REGION:GUID.",
			"routing": {
				"send": {
					"property": "IdentityId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Unlink Identity"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Logins",
			"name": "Logins",
			"type": "json",
			"default": "{}",
			"description": "A set of optional name-value pairs that map provider names to provider tokens.",
			"routing": {
				"send": {
					"property": "Logins",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Unlink Identity"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Logins To Remove",
			"name": "LoginsToRemove",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Provider names to unlink from this identity.",
			"routing": {
				"send": {
					"property": "LoginsToRemove",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Unlink Identity"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Unlink Identity"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSCognitoIdentityService.UntagResource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSCognitoIdentityService.UntagResource",
			"type": "options",
			"options": [
				{
					"name": "AWS Cognito Identity Service Untag Resource",
					"value": "AWSCognitoIdentityService.UntagResource"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resource Arn",
			"name": "ResourceArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) of the identity pool.",
			"routing": {
				"send": {
					"property": "ResourceArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Tag Keys",
			"name": "TagKeys",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The keys of the tags to remove from the user pool.",
			"routing": {
				"send": {
					"property": "TagKeys",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSCognitoIdentityService.UpdateIdentityPool",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Identity Pool"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSCognitoIdentityService.UpdateIdentityPool",
			"type": "options",
			"options": [
				{
					"name": "AWS Cognito Identity Service Update Identity Pool",
					"value": "AWSCognitoIdentityService.UpdateIdentityPool"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Identity Pool"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Identity Pool Id",
			"name": "IdentityPoolId",
			"type": "string",
			"default": "",
			"description": "An identity pool ID in the format REGION:GUID.",
			"routing": {
				"send": {
					"property": "IdentityPoolId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Identity Pool"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Identity Pool Name",
			"name": "IdentityPoolName",
			"type": "string",
			"default": "",
			"description": "A string that you provide.",
			"routing": {
				"send": {
					"property": "IdentityPoolName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Identity Pool"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Allow Unauthenticated Identities",
			"name": "AllowUnauthenticatedIdentities",
			"type": "boolean",
			"default": true,
			"description": "TRUE if the identity pool supports unauthenticated logins.",
			"routing": {
				"send": {
					"property": "AllowUnauthenticatedIdentities",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Identity Pool"
					]
				}
			}
		},
		{
			"displayName": "Allow Classic Flow",
			"name": "AllowClassicFlow",
			"type": "boolean",
			"default": true,
			"description": "Enables or disables the Basic (Classic) authentication flow. For more information, see <a href=\"https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flow.html\">Identity Pools (Federated Identities) Authentication Flow</a> in the <i>Amazon Cognito Developer Guide</i>.",
			"routing": {
				"send": {
					"property": "AllowClassicFlow",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Identity Pool"
					]
				}
			}
		},
		{
			"displayName": "Supported Login Providers",
			"name": "SupportedLoginProviders",
			"type": "json",
			"default": "{}",
			"description": "Optional key:value pairs mapping provider names to provider app IDs.",
			"routing": {
				"send": {
					"property": "SupportedLoginProviders",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Identity Pool"
					]
				}
			}
		},
		{
			"displayName": "Developer Provider Name",
			"name": "DeveloperProviderName",
			"type": "string",
			"default": "",
			"description": "The \"domain\" by which Cognito will refer to your users.",
			"routing": {
				"send": {
					"property": "DeveloperProviderName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Identity Pool"
					]
				}
			}
		},
		{
			"displayName": "Open Id Connect Provider AR Ns",
			"name": "OpenIdConnectProviderARNs",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The ARNs of the OpenID Connect providers.",
			"routing": {
				"send": {
					"property": "OpenIdConnectProviderARNs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Identity Pool"
					]
				}
			}
		},
		{
			"displayName": "Cognito Identity Providers",
			"name": "CognitoIdentityProviders",
			"type": "json",
			"default": "[\n  {\n    \"ClientId\": {},\n    \"ServerSideTokenCheck\": {}\n  }\n]",
			"description": "A list representing an Amazon Cognito user pool and its client ID.",
			"routing": {
				"send": {
					"property": "CognitoIdentityProviders",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Identity Pool"
					]
				}
			}
		},
		{
			"displayName": "Saml Provider AR Ns",
			"name": "SamlProviderARNs",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "An array of Amazon Resource Names (ARNs) of the SAML provider for your identity pool.",
			"routing": {
				"send": {
					"property": "SamlProviderARNs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Identity Pool"
					]
				}
			}
		},
		{
			"displayName": "Identity Pool Tags",
			"name": "IdentityPoolTags",
			"type": "json",
			"default": "{}",
			"description": "The tags that are assigned to the identity pool. A tag is a label that you can apply to identity pools to categorize and manage them in different ways, such as by purpose, owner, environment, or other criteria.",
			"routing": {
				"send": {
					"property": "IdentityPoolTags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Identity Pool"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Identity Pool"
					]
				}
			}
		},
];
