describe("anagram", function() {
  it("checks to see if a & b are one letter anagrams", function() {
    expect(anagram("a", "b")).to.equal(false);
  });

  it("checks to see if a & b are one letter anagrams", function() {
    expect(anagram("a", "a")).to.equal(true);
  });

  it("checks to see if multiple letter a & b's are anagrams", function() {
    expect(anagram("cat", "act")).to.equal(true);
  });

  it("checks to see if multiple letter a & b's are anagrams", function() {
    expect(anagram("cat ", "act")).to.equal(true);
  });

  it("checks to see if whitespace is inside of string", function() {
    expect(anagram("doggone", "dog gone")).to.equal(true);
  });

  it("checks case insensitively", function() {
    expect(anagram("hoW abOut a SaNdwIch", "sandwich about a how")).to.equal(true);
  });

  it("checks case insensitively along with numbers", function() {
    expect(anagram("hoW ab^Out a11 SaN$dwIch", "sa$ndwich 11a^bout a how")).to.equal(true);
  });

  it("checks to see if multiple letter a & b's are anagrams", function() {
    expect(anagram("cat ", "at")).to.equal(true);
  });

  it("checks to see if multiple letter a & b's are anagrams", function() {
    expect(anagram("catch", "act")).to.equal(true);
  });
});
