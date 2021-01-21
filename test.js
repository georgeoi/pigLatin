const PigLatin = require('./index.js')
const assert = require('assert')

describe('PigLatin Challenge', () => {

    /**
     * TEST 1
     */
    it('Test-1:', () => {

        let result = PigLatin("california")
        let expected = "aliforniacay"

        assert.strictEqual(result,expected)
    })

    /**
     * TEST 2
     */
    it('Test-2:', () => {
        let result = PigLatin("paragraphs")
        let expected = "aragraphspay"

        assert.strictEqual(result,expected)
    })

    /**
     * TEST 3
     */
    it('Test-3:', () => {
        let result = PigLatin("glove")
        let expected = "oveglay"

        assert.strictEqual(result,expected)
    })

    /**
     * TEST 4
     */
    it('Test-4:', () => {
        let result = PigLatin("algorithm")
        let expected = "algorithmway"

        assert.strictEqual(result,expected)
    })


    /**
     * TEST 5
     */
    it('Test-5:', () => {
        let result = PigLatin("eight")
        let expected = "eightway"

        assert.strictEqual(result,expected)
    })


    /**
     * TEST 6
     */
    it('Test-6:', () => {
        let result = PigLatin("schwartz")
        let expected = "artzschway"

        assert.strictEqual(result,expected)
    })

    /**
     * TEST 7
     */
    it('Test-7:', () => {
        let result = PigLatin("rhythm")
        let expected = "rhythmay"

        assert.strictEqual(result,expected)
    })



})
