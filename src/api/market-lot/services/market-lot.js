'use strict';

/**
 * market-lot service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::market-lot.market-lot');
