

var PropTypes = require('prop-types');

PropTypes.function = PropTypes.func;
PropTypes.boolean = PropTypes.bool;

module.exports = {
    name: 'core.import.prop-types',
    imports: {
        'prop-types': PropTypes,
        PropTypes: PropTypes
    }
};