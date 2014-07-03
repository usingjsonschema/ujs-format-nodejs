/**
 * Unit tests for format
 */
var assert = require ("assert");
var format = require ("../format").format;

var result = null;
describe ("format", function () {
    describe ("no arguments", function () {
        it ("returns empty string", function () {
            result = format ();
            assert.strictEqual (result, "");
        });
    });
    describe ("null base, no optional arguments", function () {
        it ("returns empty string", function () {
            result = format (null);
            assert.strictEqual (result, "");
        });
    });
    describe ("null base, 2 optional arguments", function () {
        it ("returns empty string", function () {
            result = format (null, "zero", "one");
            assert.strictEqual (result, "");
        });
    });
	describe ("base with 0 replacement spots, 0 arguments", function () {
		it ("returns the same string", function () {
			result = format ("Test string");
			assert.strictEqual (result, "Test string");
		});
	});
	describe ("base with 1 replacement spot, 1 argument", function () {
		it ("returns the new string", function () {
			result = format ("Test {0} string", "zero");
			assert.strictEqual (result, "Test zero string");
		});
	});
	describe ("base with 2 replacement spots, 2 arguments", function () {
		it ("returns the new string", function () {
			result = format ("Test {0} string {1}", "zero", "one");
			assert.strictEqual (result, "Test zero string one");
		});
	});
	describe ("base with 2 replacement spots, 3 arguments", function () {
		it ("returns the new string with 2 replacements", function () {
			result = format ("Test {0} string {1}", "zero", "one", "two");
			assert.strictEqual (result, "Test zero string one");
		});
	});
	describe ("base with 3 replacement spots, 2 arguments", function () {
		it ("returns the new string with 2 replacements, 1 marker", function () {
			result = format ("Test {0} string {1} {2}", "zero", "one");
			assert.strictEqual (result, "Test zero string one {2}");
		});
	});
});
