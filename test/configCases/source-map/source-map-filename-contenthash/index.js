it("should contain contenthash as query parameter and path", function() {
	var fs = require("fs");
	var source = fs.readFileSync(__filename, "utf-8");
	var match = /sourceMappingURL\s*=.*-([A-Fa-f0-9]{19,20})\.map\?([A-Fa-f0-9]{19,20})-([A-Fa-f0-9]{19,20})/.exec(source);
	expect(match.length).toBe(4);
});
