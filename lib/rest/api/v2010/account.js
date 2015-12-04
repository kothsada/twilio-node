'use strict';

var _ = require('lodash');
var AddressList = require('./account/address');
var ApplicationList = require('./account/application');
var AuthorizedConnectAppList = require('./account/authorizedConnectApp');
var AvailablePhoneNumberCountryList = require('./account/availablePhoneNumber');
var CallList = require('./account/call');
var ConferenceList = require('./account/conference');
var ConnectAppList = require('./account/connectApp');
var IncomingPhoneNumberList = require('./account/incomingPhoneNumber');
var Instance = require('../../../base');
var InstanceContext = require('../../../base/InstanceContext');
var MessageList = require('./account/message');
var NotificationList = require('./account/notification');
var OutgoingCallerIdList = require('./account/outgoingCallerId');
var QueueList = require('./account/queue');
var RecordingList = require('./account/recording');
var SandboxList = require('./account/sandbox');
var SipList = require('./account/sip');
var SmsList = require('./account/sms');
var TokenList = require('./account/token');
var TranscriptionList = require('./account/transcription');
var UsageList = require('./account/usage');
var ValidationRequestList = require('./account/validationRequest');
var values = require('../../../base/values');

var AccountInstance;
var AccountContext;

function AccountInstance() {
}

Object.defineProperty(AccountInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new AccountContext(
        this._version,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(AccountInstance.prototype,
  'authToken', {
  get: function() {
    return this._properties.authToken;
  },
});

Object.defineProperty(AccountInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(AccountInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(AccountInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(AccountInstance.prototype,
  'ownerAccountSid', {
  get: function() {
    return this._properties.ownerAccountSid;
  },
});

Object.defineProperty(AccountInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(AccountInstance.prototype,
  'status', {
  get: function() {
    return this._properties.status;
  },
});

Object.defineProperty(AccountInstance.prototype,
  'subresourceUris', {
  get: function() {
    return this._properties.subresourceUris;
  },
});

Object.defineProperty(AccountInstance.prototype,
  'type', {
  get: function() {
    return this._properties.type;
  },
});

Object.defineProperty(AccountInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * Initialize the AccountContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} sid: Fetch by unique Account Sid
 *
 * @returns {AccountContext}
 */
AccountInstance.prototype.AccountInstance = function AccountInstance(version,
    payload, sid) {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    authToken: payload.auth_token, // jshint ignore:line,
    dateCreated: payload.date_created, // jshint ignore:line,
    dateUpdated: payload.date_updated, // jshint ignore:line,
    friendlyName: payload.friendly_name, // jshint ignore:line,
    ownerAccountSid: payload.owner_account_sid, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    status: payload.status, // jshint ignore:line,
    subresourceUris: payload.subresource_uris, // jshint ignore:line,
    type: payload.type, // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    sid: sid || this._properties.sid,
  };
};

/**
 * Fetch a AccountInstance
 *
 * @returns Fetched AccountInstance
 */
AccountInstance.prototype.fetch = function fetch() {
  return this._proxy.fetch();
};

/**
 * Update the AccountInstance
 *
 * @param string [opts.friendlyName] - FriendlyName to update
 * @param account.status [opts.status] - Status to update the Account with
 *
 * @returns Updated AccountInstance
 */
AccountInstance.prototype.update = function update(opts) {
  return this._proxy.update(
    opts
  );
};

/**
 * Access the addresses
 *
 * @returns addresses
 */
AccountInstance.prototype.addresses = function addresses() {
  return this._proxy.addresses;
};

/**
 * Access the applications
 *
 * @returns applications
 */
AccountInstance.prototype.applications = function applications() {
  return this._proxy.applications;
};

/**
 * Access the authorizedConnectApps
 *
 * @returns authorizedConnectApps
 */
AccountInstance.prototype.authorizedConnectApps = function
    authorizedConnectApps() {
  return this._proxy.authorizedConnectApps;
};

/**
 * Access the availablePhoneNumbers
 *
 * @returns availablePhoneNumbers
 */
AccountInstance.prototype.availablePhoneNumbers = function
    availablePhoneNumbers() {
  return this._proxy.availablePhoneNumbers;
};

/**
 * Access the calls
 *
 * @returns calls
 */
AccountInstance.prototype.calls = function calls() {
  return this._proxy.calls;
};

/**
 * Access the conferences
 *
 * @returns conferences
 */
AccountInstance.prototype.conferences = function conferences() {
  return this._proxy.conferences;
};

/**
 * Access the connectApps
 *
 * @returns connectApps
 */
AccountInstance.prototype.connectApps = function connectApps() {
  return this._proxy.connectApps;
};

/**
 * Access the incomingPhoneNumbers
 *
 * @returns incomingPhoneNumbers
 */
AccountInstance.prototype.incomingPhoneNumbers = function incomingPhoneNumbers()
    {
  return this._proxy.incomingPhoneNumbers;
};

/**
 * Access the messages
 *
 * @returns messages
 */
AccountInstance.prototype.messages = function messages() {
  return this._proxy.messages;
};

/**
 * Access the notifications
 *
 * @returns notifications
 */
AccountInstance.prototype.notifications = function notifications() {
  return this._proxy.notifications;
};

/**
 * Access the outgoingCallerIds
 *
 * @returns outgoingCallerIds
 */
AccountInstance.prototype.outgoingCallerIds = function outgoingCallerIds() {
  return this._proxy.outgoingCallerIds;
};

/**
 * Access the queues
 *
 * @returns queues
 */
AccountInstance.prototype.queues = function queues() {
  return this._proxy.queues;
};

/**
 * Access the recordings
 *
 * @returns recordings
 */
AccountInstance.prototype.recordings = function recordings() {
  return this._proxy.recordings;
};

/**
 * Access the sandbox
 *
 * @returns sandbox
 */
AccountInstance.prototype.sandbox = function sandbox() {
  return this._proxy.sandbox;
};

/**
 * Access the sip
 *
 * @returns sip
 */
AccountInstance.prototype.sip = function sip() {
  return this._proxy.sip;
};

/**
 * Access the sms
 *
 * @returns sms
 */
AccountInstance.prototype.sms = function sms() {
  return this._proxy.sms;
};

/**
 * Access the tokens
 *
 * @returns tokens
 */
AccountInstance.prototype.tokens = function tokens() {
  return this._proxy.tokens;
};

/**
 * Access the transcriptions
 *
 * @returns transcriptions
 */
AccountInstance.prototype.transcriptions = function transcriptions() {
  return this._proxy.transcriptions;
};

/**
 * Access the usage
 *
 * @returns usage
 */
AccountInstance.prototype.usage = function usage() {
  return this._proxy.usage;
};

/**
 * Access the validationRequests
 *
 * @returns validationRequests
 */
AccountInstance.prototype.validationRequests = function validationRequests() {
  return this._proxy.validationRequests;
};


/**
 * Initialize the AccountContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} sid - Fetch by unique Account Sid
 *
 * @returns {AccountContext}
 */
function AccountContext(version, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<% sid %>.json', // jshint ignore:line
    this._solution
  );

  // Dependents
  this._addresses = undefined;
  this._applications = undefined;
  this._authorizedConnectApps = undefined;
  this._availablePhoneNumbers = undefined;
  this._calls = undefined;
  this._conferences = undefined;
  this._connectApps = undefined;
  this._incomingPhoneNumbers = undefined;
  this._messages = undefined;
  this._notifications = undefined;
  this._outgoingCallerIds = undefined;
  this._queues = undefined;
  this._recordings = undefined;
  this._sandbox = undefined;
  this._sip = undefined;
  this._sms = undefined;
  this._tokens = undefined;
  this._transcriptions = undefined;
  this._usage = undefined;
  this._validationRequests = undefined;
}

Object.defineProperty(AccountContext.prototype,
  'addresses', {
  get: function() {
    if (!this._addresses) {
      this._addresses = new AddressList(
        this._version,
        this._solution.accountSid
      );
    }
    return this._addresses;
  },
});

Object.defineProperty(AccountContext.prototype,
  'applications', {
  get: function() {
    if (!this._applications) {
      this._applications = new ApplicationList(
        this._version,
        this._solution.accountSid
      );
    }
    return this._applications;
  },
});

Object.defineProperty(AccountContext.prototype,
  'authorizedConnectApps', {
  get: function() {
    if (!this._authorizedConnectApps) {
      this._authorizedConnectApps = new AuthorizedConnectAppList(
        this._version,
        this._solution.accountSid
      );
    }
    return this._authorizedConnectApps;
  },
});

Object.defineProperty(AccountContext.prototype,
  'availablePhoneNumbers', {
  get: function() {
    if (!this._availablePhoneNumbers) {
      this._availablePhoneNumbers = new AvailablePhoneNumberCountryList(
        this._version,
        this._solution.accountSid
      );
    }
    return this._availablePhoneNumbers;
  },
});

Object.defineProperty(AccountContext.prototype,
  'calls', {
  get: function() {
    if (!this._calls) {
      this._calls = new CallList(
        this._version,
        this._solution.accountSid
      );
    }
    return this._calls;
  },
});

Object.defineProperty(AccountContext.prototype,
  'conferences', {
  get: function() {
    if (!this._conferences) {
      this._conferences = new ConferenceList(
        this._version,
        this._solution.accountSid
      );
    }
    return this._conferences;
  },
});

Object.defineProperty(AccountContext.prototype,
  'connectApps', {
  get: function() {
    if (!this._connectApps) {
      this._connectApps = new ConnectAppList(
        this._version,
        this._solution.accountSid
      );
    }
    return this._connectApps;
  },
});

Object.defineProperty(AccountContext.prototype,
  'incomingPhoneNumbers', {
  get: function() {
    if (!this._incomingPhoneNumbers) {
      this._incomingPhoneNumbers = new IncomingPhoneNumberList(
        this._version,
        this._solution.ownerAccountSid
      );
    }
    return this._incomingPhoneNumbers;
  },
});

Object.defineProperty(AccountContext.prototype,
  'messages', {
  get: function() {
    if (!this._messages) {
      this._messages = new MessageList(
        this._version,
        this._solution.accountSid
      );
    }
    return this._messages;
  },
});

Object.defineProperty(AccountContext.prototype,
  'notifications', {
  get: function() {
    if (!this._notifications) {
      this._notifications = new NotificationList(
        this._version,
        this._solution.accountSid
      );
    }
    return this._notifications;
  },
});

Object.defineProperty(AccountContext.prototype,
  'outgoingCallerIds', {
  get: function() {
    if (!this._outgoingCallerIds) {
      this._outgoingCallerIds = new OutgoingCallerIdList(
        this._version,
        this._solution.accountSid
      );
    }
    return this._outgoingCallerIds;
  },
});

Object.defineProperty(AccountContext.prototype,
  'queues', {
  get: function() {
    if (!this._queues) {
      this._queues = new QueueList(
        this._version,
        this._solution.accountSid
      );
    }
    return this._queues;
  },
});

Object.defineProperty(AccountContext.prototype,
  'recordings', {
  get: function() {
    if (!this._recordings) {
      this._recordings = new RecordingList(
        this._version,
        this._solution.accountSid
      );
    }
    return this._recordings;
  },
});

Object.defineProperty(AccountContext.prototype,
  'sandbox', {
  get: function() {
    if (!this._sandbox) {
      this._sandbox = new SandboxList(
        this._version,
        this._solution.accountSid
      );
    }
    return this._sandbox;
  },
});

Object.defineProperty(AccountContext.prototype,
  'sip', {
  get: function() {
    if (!this._sip) {
      this._sip = new SipList(
        this._version,
        this._solution.accountSid
      );
    }
    return this._sip;
  },
});

Object.defineProperty(AccountContext.prototype,
  'sms', {
  get: function() {
    if (!this._sms) {
      this._sms = new SmsList(
        this._version,
        this._solution.accountSid
      );
    }
    return this._sms;
  },
});

Object.defineProperty(AccountContext.prototype,
  'tokens', {
  get: function() {
    if (!this._tokens) {
      this._tokens = new TokenList(
        this._version,
        this._solution.accountSid
      );
    }
    return this._tokens;
  },
});

Object.defineProperty(AccountContext.prototype,
  'transcriptions', {
  get: function() {
    if (!this._transcriptions) {
      this._transcriptions = new TranscriptionList(
        this._version,
        this._solution.accountSid
      );
    }
    return this._transcriptions;
  },
});

Object.defineProperty(AccountContext.prototype,
  'usage', {
  get: function() {
    if (!this._usage) {
      this._usage = new UsageList(
        this._version,
        this._solution.accountSid
      );
    }
    return this._usage;
  },
});

Object.defineProperty(AccountContext.prototype,
  'validationRequests', {
  get: function() {
    if (!this._validationRequests) {
      this._validationRequests = new ValidationRequestList(
        this._version,
        this._solution.accountSid
      );
    }
    return this._validationRequests;
  },
});

/**
 * Fetch a AccountInstance
 *
 * @returns Fetched AccountInstance
 */
AccountContext.prototype.fetch = function fetch() {
  var params = values.of({});

  var payload = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  return new AccountInstance(
    this._version,
    payload,
    this._solution.sid
  );
};

/**
 * Update the AccountInstance
 *
 * @param string [opts.friendlyName] - FriendlyName to update
 * @param account.status [opts.status] - Status to update the Account with
 *
 * @returns Updated AccountInstance
 */
AccountContext.prototype.update = function update(opts) {
  var data = values.of({
    'Friendlyname': opts.friendlyName,
    'Status': opts.status,
  });

  var payload = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data,
  });

  return new AccountInstance(
    this._version,
    payload,
    this._solution.sid
  );
};

module.exports = {
  AccountInstance: AccountInstance,
  AccountContext: AccountContext
};