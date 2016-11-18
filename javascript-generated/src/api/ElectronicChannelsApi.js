/**
 * Kunta API
 * Solution to combine municipality services under single API.
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BadRequest', 'model/ElectronicChannel', 'model/Forbidden', 'model/InternalServerError', 'model/NotFound'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequest'), require('../model/ElectronicChannel'), require('../model/Forbidden'), require('../model/InternalServerError'), require('../model/NotFound'));
  } else {
    // Browser globals (root is window)
    if (!root.KuntaApiClient) {
      root.KuntaApiClient = {};
    }
    root.KuntaApiClient.ElectronicChannelsApi = factory(root.KuntaApiClient.ApiClient, root.KuntaApiClient.BadRequest, root.KuntaApiClient.ElectronicChannel, root.KuntaApiClient.Forbidden, root.KuntaApiClient.InternalServerError, root.KuntaApiClient.NotFound);
  }
}(this, function(ApiClient, BadRequest, ElectronicChannel, Forbidden, InternalServerError, NotFound) {
  'use strict';

  /**
   * ElectronicChannels service.
   * @module api/ElectronicChannelsApi
   * @version 0.0.26
   */

  /**
   * Constructs a new ElectronicChannelsApi. 
   * @alias module:api/ElectronicChannelsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * creates ElectronicChannel
     * creates ElectronicChannel
     * @param {String} serviceId service id
     * @param {module:model/ElectronicChannel} body Payload
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ElectronicChannel}
     */
    this.createServiceElectronicChannel = function(serviceId, body) {
      var postBody = body;

      // verify the required parameter 'serviceId' is set
      if (serviceId == undefined || serviceId == null) {
        throw "Missing the required parameter 'serviceId' when calling createServiceElectronicChannel";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling createServiceElectronicChannel";
      }


      var pathParams = {
        'serviceId': serviceId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = ElectronicChannel;

      return this.apiClient.callApi(
        '/services/{serviceId}/electronicChannels', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * finds ElectronicChannel by electronicChannelId
     * finds ElectronicChannels by electronicChannelId
     * @param {String} serviceId Service id
     * @param {String} electronicChannelId electronicChannel id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ElectronicChannel}
     */
    this.findServiceElectronicChannel = function(serviceId, electronicChannelId) {
      var postBody = null;

      // verify the required parameter 'serviceId' is set
      if (serviceId == undefined || serviceId == null) {
        throw "Missing the required parameter 'serviceId' when calling findServiceElectronicChannel";
      }

      // verify the required parameter 'electronicChannelId' is set
      if (electronicChannelId == undefined || electronicChannelId == null) {
        throw "Missing the required parameter 'electronicChannelId' when calling findServiceElectronicChannel";
      }


      var pathParams = {
        'serviceId': serviceId,
        'electronicChannelId': electronicChannelId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = ElectronicChannel;

      return this.apiClient.callApi(
        '/services/{serviceId}/electronicChannels/{electronicChannelId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Lists ElectronicChannels by serviceId
     * Lists ElectronicChannels by serviceId
     * @param {String} serviceId Service id
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.firstResult First result
     * @param {Integer} opts.maxResults Max results
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ElectronicChannel>}
     */
    this.listServiceElectronicChannels = function(serviceId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'serviceId' is set
      if (serviceId == undefined || serviceId == null) {
        throw "Missing the required parameter 'serviceId' when calling listServiceElectronicChannels";
      }


      var pathParams = {
        'serviceId': serviceId
      };
      var queryParams = {
        'firstResult': opts['firstResult'],
        'maxResults': opts['maxResults']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = [ElectronicChannel];

      return this.apiClient.callApi(
        '/services/{serviceId}/electronicChannels', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Updates ElectronicChannel
     * Updates ElectronicChannel
     * @param {String} serviceId service id
     * @param {String} electronicChannelId electronicChannel id
     * @param {module:model/ElectronicChannel} body Payload
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ElectronicChannel}
     */
    this.updateServiceElectronicChannel = function(serviceId, electronicChannelId, body) {
      var postBody = body;

      // verify the required parameter 'serviceId' is set
      if (serviceId == undefined || serviceId == null) {
        throw "Missing the required parameter 'serviceId' when calling updateServiceElectronicChannel";
      }

      // verify the required parameter 'electronicChannelId' is set
      if (electronicChannelId == undefined || electronicChannelId == null) {
        throw "Missing the required parameter 'electronicChannelId' when calling updateServiceElectronicChannel";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateServiceElectronicChannel";
      }


      var pathParams = {
        'serviceId': serviceId,
        'electronicChannelId': electronicChannelId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = ElectronicChannel;

      return this.apiClient.callApi(
        '/services/{serviceId}/electronicChannels/{electronicChannelId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
