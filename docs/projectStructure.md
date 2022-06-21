#Project Structure

This is a Next.js projectso the basic structure is pretty straightforward.
Inside the src project you can find all the files that are not pages organized using the following structure:

- components-layout
- components-ui
- configs
- data
- declarations
- hooks
- utils

in the following sub-section every folder is explained briefly.

###components-layout
In this folders are stored all the components related with the application layout (i.e. menu, sidebar, drawer, footer, header).

###components-ui
In this folder are stored all the components used throughout the application.

###configs
Configs can be configurations file like the one needed for the i18n or just constants used to setup some application aspects.
Every file contains a configuration.

###data
All the static data used by the application (i.e. the CV infos) are organized here inside sub-directories.

###declarations
All the types, enums, interfaces used in multiple points of the application are stored here. One file one declaration.

###hooks
Here are stored all the hooks used by application.

###utils
Common functions used throughout the application are stored here organized by thematic area.

##Components structure
Every component is stored in a folder with its name; inside the folder there is an index.tsx with the component definition and, eventually, an scss module for the component style.
The only components who don't follow this rule are the Next.js pages.

Sometimes it happens that a single component can be splitted in smaller parts to obtain a more readable code; the single parts does not have a "meaning" and cannot be used taken individually,
so they are stored in sub-folders inside the parent component using the same structure described above.

