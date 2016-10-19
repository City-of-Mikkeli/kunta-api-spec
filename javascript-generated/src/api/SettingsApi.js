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
    define(['ApiClient', 'model/OrganizationSetting', 'model/BadRequest', 'model/Forbidden', 'model/InternalServerError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/OrganizationSetting'), require('../model/BadRequest'), require('../model/Forbidden'), require('../model/InternalServerError'));
  } else {
    // Browser globals (root is window)
    if (!root.KuntaApiClient) {
      root.KuntaApiClient = {};
    }
    root.KuntaApiClient.SettingsApi = factory(root.KuntaApiClient.ApiClient, root.KuntaApiClient.OrganizationSetting, root.KuntaApiClient.BadRequest, root.KuntaApiClient.Forbidden, root.KuntaApiClient.InternalServerError);
  }
}(this, function(ApiClient, OrganizationSetting, BadRequest, Forbidden, InternalServerError) {
  'use strict';

  /**
   * Settings service.
   * @module api/SettingsApi
   * @version 0.0.17
   */

  /**
   * Constructs a new SettingsApi. 
   * @alias module:api/SettingsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Creates organization setting
     * Creates organization setting 
     * @param {String} organizationId Organization id
     * @param {Object} opts Optional parameters
     * @param {module:model/OrganizationSetting} opts.setting 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrganizationSetting}
     */
    this.createOrganizationSetting = function(organizationId, opts) {
      opts = opts || {};
      var postBody = opts['setting'];

      // verify the required parameter 'organizationId' is set
      if (organizationId == undefined || organizationId == null) {
        throw "Missing the required parameter 'organizationId' when calling createOrganizationSetting";
      }


      var pathParams = {
        'organizationId': organizationId
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
      var returnType = OrganizationSetting;

      return this.apiClient.callApi(
        '/organizations/{organizationId}/settings/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Deletes an organization setting
     * Deletes an organization setting 
     * @param {String} organizationId Organization id
     * @param {String} settingId Setting id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteOrganizationSetting = function(organizationId, settingId) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId == undefined || organizationId == null) {
        throw "Missing the required parameter 'organizationId' when calling deleteOrganizationSetting";
      }

      // verify the required parameter 'settingId' is set
      if (settingId == undefined || settingId == null) {
        throw "Missing the required parameter 'settingId' when calling deleteOrganizationSetting";
      }


      var pathParams = {
        'organizationId': organizationId,
        'settingId': settingId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/organizations/{organizationId}/settings/{settingId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Finds organizations setting
     * Finds single organization setting 
     * @param {String} organizationId Organization id
     * @param {String} settingId Setting id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrganizationSetting}
     */
    this.findOrganizationSetting = function(organizationId, settingId) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId == undefined || organizationId == null) {
        throw "Missing the required parameter 'organizationId' when calling findOrganizationSetting";
      }

      // verify the required parameter 'settingId' is set
      if (settingId == undefined || settingId == null) {
        throw "Missing the required parameter 'settingId' when calling findOrganizationSetting";
      }


      var pathParams = {
        'organizationId': organizationId,
        'settingId': settingId
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
      var returnType = OrganizationSetting;

      return this.apiClient.callApi(
        '/organizations/{organizationId}/settings/{settingId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Lists organizations settings
     * Lists organizations settings 
     * @param {String} organizationId Organization id
     * @param {Object} opts Optional parameters
     * @param {String} opts.key Setting key
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/OrganizationSetting>}
     */
    this.listOrganizationSettings = function(organizationId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId == undefined || organizationId == null) {
        throw "Missing the required parameter 'organizationId' when calling listOrganizationSettings";
      }


      var pathParams = {
        'organizationId': organizationId
      };
      var queryParams = {
        'key': opts['key']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = [OrganizationSetting];

      return this.apiClient.callApi(
        '/organizations/{organizationId}/settings/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Updates an organization setting
     * Updates an organization setting 
     * @param {String} organizationId Organization id
     * @param {String} settingId Setting id
     * @param {Object} opts Optional parameters
     * @param {module:model/OrganizationSetting} opts.setting 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrganizationSetting}
     */
    this.updateOrganizationSetting = function(organizationId, settingId, opts) {
      opts = opts || {};
      var postBody = opts['setting'];

      // verify the required parameter 'organizationId' is set
      if (organizationId == undefined || organizationId == null) {
        throw "Missing the required parameter 'organizationId' when calling updateOrganizationSetting";
      }

      // verify the required parameter 'settingId' is set
      if (settingId == undefined || settingId == null) {
        throw "Missing the required parameter 'settingId' when calling updateOrganizationSetting";
      }


      var pathParams = {
        'organizationId': organizationId,
        'settingId': settingId
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
      var returnType = OrganizationSetting;

      return this.apiClient.callApi(
        '/organizations/{organizationId}/settings/{settingId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));