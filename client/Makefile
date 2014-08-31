
lib_srcs = $(wildcard lib/*.js)
test_srcs = $(wildcard test/*.js)

all:
	npm run build

build_:
	duo test/*.js > test/build/build.js

test:
	npm test

cleanall: clean
	rm -rf components

clean:
	rm -f test/build/build.js
	rm -f build/build.js

test/build/build.js: $(test_srcs) $(lib_srcs)
	duo test/*.js > test/build/build.js

test_: test/build/build.js
	duo test -B test/build/build.js browser

.PHONY: test build cleanall clean
