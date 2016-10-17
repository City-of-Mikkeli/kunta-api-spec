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
    define(['ApiClient', 'model/LocalizedValue', 'model/OntologyItem', 'model/WebPage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LocalizedValue'), require('./OntologyItem'), require('./WebPage'));
  } else {
    // Browser globals (root is window)
    if (!root.KuntaApiClient) {
      root.KuntaApiClient = {};
    }
    root.KuntaApiClient.Service = factory(root.KuntaApiClient.ApiClient, root.KuntaApiClient.LocalizedValue, root.KuntaApiClient.OntologyItem, root.KuntaApiClient.WebPage);
  }
}(this, function(ApiClient, LocalizedValue, OntologyItem, WebPage) {
  'use strict';




  /**
   * The Service model module.
   * @module model/Service
   * @version 0.0.15
   */

  /**
   * Constructs a new <code>Service</code>.
   * @alias module:model/Service
   * @class
   */
  var exports = function() {
    var _this = this;




















  };

  /**
   * Constructs a <code>Service</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Service} obj Optional instance to populate.
   * @return {module:model/Service} The populated <code>Service</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('statutoryDescriptionId')) {
        obj['statutoryDescriptionId'] = ApiClient.convertToType(data['statutoryDescriptionId'], 'String');
      }
      if (data.hasOwnProperty('serviceClasses')) {
        obj['serviceClasses'] = ApiClient.convertToType(data['serviceClasses'], [OntologyItem]);
      }
      if (data.hasOwnProperty('ontologyTerms')) {
        obj['ontologyTerms'] = ApiClient.convertToType(data['ontologyTerms'], [OntologyItem]);
      }
      if (data.hasOwnProperty('targetGroups')) {
        obj['targetGroups'] = ApiClient.convertToType(data['targetGroups'], [OntologyItem]);
      }
      if (data.hasOwnProperty('lifeEvents')) {
        obj['lifeEvents'] = ApiClient.convertToType(data['lifeEvents'], [OntologyItem]);
      }
      if (data.hasOwnProperty('industrialClasses')) {
        obj['industrialClasses'] = ApiClient.convertToType(data['industrialClasses'], [OntologyItem]);
      }
      if (data.hasOwnProperty('names')) {
        obj['names'] = ApiClient.convertToType(data['names'], [LocalizedValue]);
      }
      if (data.hasOwnProperty('descriptions')) {
        obj['descriptions'] = ApiClient.convertToType(data['descriptions'], [LocalizedValue]);
      }
      if (data.hasOwnProperty('languages')) {
        obj['languages'] = ApiClient.convertToType(data['languages'], ['String']);
      }
      if (data.hasOwnProperty('keywords')) {
        obj['keywords'] = ApiClient.convertToType(data['keywords'], ['String']);
      }
      if (data.hasOwnProperty('coverageType')) {
        obj['coverageType'] = ApiClient.convertToType(data['coverageType'], 'String');
      }
      if (data.hasOwnProperty('municipalities')) {
        obj['municipalities'] = ApiClient.convertToType(data['municipalities'], ['String']);
      }
      if (data.hasOwnProperty('webPages')) {
        obj['webPages'] = ApiClient.convertToType(data['webPages'], [WebPage]);
      }
      if (data.hasOwnProperty('requirements')) {
        obj['requirements'] = ApiClient.convertToType(data['requirements'], [LocalizedValue]);
      }
      if (data.hasOwnProperty('publishingStatus')) {
        obj['publishingStatus'] = ApiClient.convertToType(data['publishingStatus'], 'String');
      }
      if (data.hasOwnProperty('chargeType')) {
        obj['chargeType'] = ApiClient.convertToType(data['chargeType'], 'String');
      }
      if (data.hasOwnProperty('additionalInformations')) {
        obj['additionalInformations'] = ApiClient.convertToType(data['additionalInformations'], [LocalizedValue]);
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} statutoryDescriptionId
   */
  exports.prototype['statutoryDescriptionId'] = undefined;
  /**
   * @member {Array.<module:model/OntologyItem>} serviceClasses
   */
  exports.prototype['serviceClasses'] = undefined;
  /**
   * @member {Array.<module:model/OntologyItem>} ontologyTerms
   */
  exports.prototype['ontologyTerms'] = undefined;
  /**
   * @member {Array.<module:model/OntologyItem>} targetGroups
   */
  exports.prototype['targetGroups'] = undefined;
  /**
   * @member {Array.<module:model/OntologyItem>} lifeEvents
   */
  exports.prototype['lifeEvents'] = undefined;
  /**
   * @member {Array.<module:model/OntologyItem>} industrialClasses
   */
  exports.prototype['industrialClasses'] = undefined;
  /**
   * @member {Array.<module:model/LocalizedValue>} names
   */
  exports.prototype['names'] = undefined;
  /**
   * @member {Array.<module:model/LocalizedValue>} descriptions
   */
  exports.prototype['descriptions'] = undefined;
  /**
   * @member {Array.<String>} languages
   */
  exports.prototype['languages'] = undefined;
  /**
   * @member {Array.<String>} keywords
   */
  exports.prototype['keywords'] = undefined;
  /**
   * @member {String} coverageType
   */
  exports.prototype['coverageType'] = undefined;
  /**
   * @member {Array.<String>} municipalities
   */
  exports.prototype['municipalities'] = undefined;
  /**
   * @member {Array.<module:model/WebPage>} webPages
   */
  exports.prototype['webPages'] = undefined;
  /**
   * @member {Array.<module:model/LocalizedValue>} requirements
   */
  exports.prototype['requirements'] = undefined;
  /**
   * @member {String} publishingStatus
   */
  exports.prototype['publishingStatus'] = undefined;
  /**
   * @member {String} chargeType
   */
  exports.prototype['chargeType'] = undefined;
  /**
   * @member {Array.<module:model/LocalizedValue>} additionalInformations
   */
  exports.prototype['additionalInformations'] = undefined;



  return exports;
}));


