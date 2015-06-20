# Intelliship Print Extension

Specific Project(s)
-------------------
- Cross-browser plug-in or similar product that will enable the
company’s software product (Intelliship) to print documents and labels to a user’s printer
without encountering the browsers’ “dialogue box” and without incorporating java-based
third party printing tools (such as “QZ Print”).
- For clarity, when completed the software code written will enable an Intelliship user
to select “Print” from the Intelliship software and the selected or appropriate
documents will print to the appropriate printer(s) without any further action required
by user.
- The specific details of the desired software shall be provided via consultation with
the Chief Systems Architect and may incorporate options such that the user can, if
desired, view a “dialogue box”.

#### Requirements
------------------
- firefox version >= 38
- `jpm` Installation instruction can be found
[here](https://developer.mozilla.org/en-US/Add-ons/SDK/Tools/jpm).
- `make` Which should already be installed if you are in linux or unix.

#### Installation
-------------------
Now you will need to download the repository and make the extension.
```
git clone git@github.com:Kyly/intelliship-print-extension.git
cd intelliship-print-extension/
make
```
Now that we have all that sorted we need to add the extension to firefox.
Open firefox press `ctrl + shift + a` this will bring up _about:addons_ page.
Navigate to `intelliship-print-extension/build/bin` in your file browser and
drag `intelliPrintSetup-0.0.1.xpi` into the _about:addons_ page. Follow the 
firefox dialogue. Once this is done you should see the Intelliship logo in the
upper right hand side of your firefox navigation bar.

#### Usage
----------
Comming soon...
