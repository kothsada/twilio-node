'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var util = require('util');  /* jshint ignore:line */
var Page = require('../../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../../base/deserialize');  /* jshint ignore:line */
var values = require('../../../../base/values');  /* jshint ignore:line */

var ExportAssistantList;
var ExportAssistantPage;
var ExportAssistantInstance;
var ExportAssistantContext;

/* jshint ignore:start */
/**
 * Initialize the ExportAssistantList
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @constructor Twilio.Autopilot.V1.AssistantContext.ExportAssistantList
 *
 * @param {Twilio.Autopilot.V1} version - Version of the resource
 * @param {string} assistantSid - The SID of the Assistant to export.
 */
/* jshint ignore:end */
ExportAssistantList = function ExportAssistantList(version, assistantSid) {
  /* jshint ignore:start */
  /**
   * @function exportAssistant
   * @memberof Twilio.Autopilot.V1.AssistantContext#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Autopilot.V1.AssistantContext.ExportAssistantContext}
   */
  /* jshint ignore:end */
  function ExportAssistantListInstance(sid) {
    return ExportAssistantListInstance.get(sid);
  }

  ExportAssistantListInstance._version = version;
  // Path Solution
  ExportAssistantListInstance._solution = {assistantSid: assistantSid};
  /* jshint ignore:start */
  /**
   * Constructs a export_assistant
   *
   * @function get
   * @memberof Twilio.Autopilot.V1.AssistantContext.ExportAssistantList#
   *
   * @returns {Twilio.Autopilot.V1.AssistantContext.ExportAssistantContext}
   */
  /* jshint ignore:end */
  ExportAssistantListInstance.get = function get() {
    return new ExportAssistantContext(this._version, this._solution.assistantSid);
  };

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.Autopilot.V1.AssistantContext.ExportAssistantList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  ExportAssistantListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  ExportAssistantListInstance[util.inspect.custom] = function inspect(depth,
      options) {
    return util.inspect(this.toJSON(), options);
  };

  return ExportAssistantListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the ExportAssistantPage
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @constructor Twilio.Autopilot.V1.AssistantContext.ExportAssistantPage
 *
 * @param {V1} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {ExportAssistantSolution} solution - Path solution
 *
 * @returns ExportAssistantPage
 */
/* jshint ignore:end */
ExportAssistantPage = function ExportAssistantPage(version, response, solution)
                                                    {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(ExportAssistantPage.prototype, Page.prototype);
ExportAssistantPage.prototype.constructor = ExportAssistantPage;

/* jshint ignore:start */
/**
 * Build an instance of ExportAssistantInstance
 *
 * @function getInstance
 * @memberof Twilio.Autopilot.V1.AssistantContext.ExportAssistantPage#
 *
 * @param {ExportAssistantPayload} payload - Payload response from the API
 *
 * @returns ExportAssistantInstance
 */
/* jshint ignore:end */
ExportAssistantPage.prototype.getInstance = function getInstance(payload) {
  return new ExportAssistantInstance(this._version, payload, this._solution.assistantSid);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Autopilot.V1.AssistantContext.ExportAssistantPage#
 *
 * @returns Object
 */
/* jshint ignore:end */
ExportAssistantPage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

ExportAssistantPage.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the ExportAssistantContext
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @constructor Twilio.Autopilot.V1.AssistantContext.ExportAssistantInstance
 *
 * @property {string} accountSid - The SID of the Account that created the resource
 * @property {string} assistantSid - The SID of the Assistant to export.
 * @property {Date} dateCreated -
 *          The RFC 2822 date and time in GMT when the resource was created
 * @property {export_assistant.status} status - The status of the export
 * @property {number} errorCode -
 *          More information about why the export failed, if `status` is `failed`
 * @property {string} url - The absolute URL of the Export resource.
 * @property {object} schema -
 *          The JSON string that describes the requested Assistant.
 *
 * @param {V1} version - Version of the resource
 * @param {ExportAssistantPayload} payload - The instance payload
 * @param {sid} assistantSid - The SID of the Assistant to export.
 */
/* jshint ignore:end */
ExportAssistantInstance = function ExportAssistantInstance(version, payload,
                                                            assistantSid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.assistantSid = payload.assistant_sid; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.status = payload.status; // jshint ignore:line
  this.errorCode = deserialize.integer(payload.error_code); // jshint ignore:line
  this.url = payload.url; // jshint ignore:line
  this.schema = payload.schema; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {assistantSid: assistantSid, };
};

Object.defineProperty(ExportAssistantInstance.prototype,
  '_proxy', {
    get: function() {
      if (!this._context) {
        this._context = new ExportAssistantContext(this._version, this._solution.assistantSid);
      }

      return this._context;
    }
});

/* jshint ignore:start */
/**
 * fetch a ExportAssistantInstance
 *
 * @function fetch
 * @memberof Twilio.Autopilot.V1.AssistantContext.ExportAssistantInstance#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ExportAssistantInstance
 */
/* jshint ignore:end */
ExportAssistantInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Autopilot.V1.AssistantContext.ExportAssistantInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
ExportAssistantInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

ExportAssistantInstance.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the ExportAssistantContext
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @constructor Twilio.Autopilot.V1.AssistantContext.ExportAssistantContext
 *
 * @param {V1} version - Version of the resource
 * @param {sid_like} assistantSid - The SID of the Assistant to export.
 */
/* jshint ignore:end */
ExportAssistantContext = function ExportAssistantContext(version, assistantSid)
                                                          {
  this._version = version;

  // Path Solution
  this._solution = {assistantSid: assistantSid, };
  this._uri = `/Assistants/${assistantSid}/Export`;
};

/* jshint ignore:start */
/**
 * fetch a ExportAssistantInstance
 *
 * @function fetch
 * @memberof Twilio.Autopilot.V1.AssistantContext.ExportAssistantContext#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ExportAssistantInstance
 */
/* jshint ignore:end */
ExportAssistantContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new ExportAssistantInstance(this._version, payload, this._solution.assistantSid));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Autopilot.V1.AssistantContext.ExportAssistantContext#
 *
 * @returns Object
 */
/* jshint ignore:end */
ExportAssistantContext.prototype.toJSON = function toJSON() {
  return this._solution;
};

ExportAssistantContext.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  ExportAssistantList: ExportAssistantList,
  ExportAssistantPage: ExportAssistantPage,
  ExportAssistantInstance: ExportAssistantInstance,
  ExportAssistantContext: ExportAssistantContext
};
