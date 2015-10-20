all: ts

ts:
	@tsc --outDir `pwd`

.PHONY: ts
