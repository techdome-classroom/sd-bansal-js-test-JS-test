        assert.equal(result, 3);
    });
    it(`Returns 1 for [["W", "W", "W", "W"], ["W", "L", "L", "W"], ["W", "L", "L", "W"], ["W", "W", "W", "W"]]`, function () {
        const result = getTotalIsles([["W", "W", "W", "W"], ["W", "L", "L", "W"], ["W", "L", "L", "W"], ["W", "W", "W", "W"]]);
        assert.equal(result, 1);
    });
});