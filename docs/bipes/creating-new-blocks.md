# Creating New Blocks in BIPES

You are able to create custom blocks for your toolbox in BIPES. <br/>

Here is a link to the official documentation regarding the creation of new blocks: <br/>
[https://bipes.net.br/docs/get-started/create-block.html](https://bipes.net.br/docs/get-started/create-block.html)

The following is a simplified tutorial for creating a new block for your BIPES toolbox. 

## Step 01: Block Definition

1. Open up the Blockly Block Factory in a browser: [https://blockly-demo.appspot.com/static/demos/blockfactory/index.html](https://blockly-demo.appspot.com/static/demos/blockfactory/index.html)
2. Create the desired connections for your new block using Block Factory.
3. Go to **Block Definition** and select **JavaScript**.
4. Copy the code stub located in that section.
5. Navigate to the file **BIPES-offline-master/ui/core/block-definitions.js** and open it.
6. Paste in the copied code stub at the bottom of this file.

NOTE: ENSURE THAT THE NAME OF YOUR BLOCK IS CONSISTENT FOR ALL OF THE STEPS!!!

## Step 02: Generator Stub

1. In the Block Factory, go to **Generator Stub** and select **Python**.
2. Copy the code stub located in that section.
3. Navigate to the file **BIPES-offline-master/ui/core/generator-stubs.js** and open it.
4. Paste in the copied code stub at the bottom of this file.
5. Inside `var code = '...\n';`, paste in the micropython code you want your custom block to run. <br/>
   Reference the existing blocks in the file if you are making a complex custom block. Good luck!
6. Change `python.pythonGenerator.forBlock` to `Blockly.Python`!!! This is an important step!

## Step 03: Add to Toolbox

1. Navigate to the file **BIPES-offline-master/ui/toolbox/BOARD_NAME.xml*** where BOARD_NAME is the board you want to add your block to its toolbox and open it.
2. Create a category for your custom blocks by pasting in `<category name="CATEOGRY_NAME"><category/>` into this .xml file. <br/>
   Your custom category can go anywhere, but ensure you are within the parent `<xml><xml/>` tags.
3. Paste `<block type="BLOCK_NAME"></block>` within your custom category tag. <br/>
   Ensure that BLOCK_NAME matches the name of your block as defined in the Block Definition and Generator Stub.


### Step 04: Remake

1. Open up a terminal and navigate to the **BIPES-offline-master** directory.
2. Run `make offline` in this directory.
3. Once completed, the file **BIPES-offline-master/ui/index_offline.html** should be updated with your custom blocks (make sure you have the correct board selected). 

This concludes a brief summary of how to create custom toolbox blocks for a board in BIPES. <br/> 

Now, try to make some custom blocks on your own! Good luck!




