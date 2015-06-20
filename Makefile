# Builds exstension with jsprintsetup included in resultig xpi document

all:
	jpm xpi
	rm -rf build/src/* build/bin/intelliPrintSetup-0.0.1.xpi
	cp build/resources/jsprintsetup-0.9.5.1.xpi build/resources/install.rdf build/src/
	mv @printintelliship-*.xpi build/src/
	zip -j build/bin/intelliPrintSetup-0.0.1.xpi build/src/*
