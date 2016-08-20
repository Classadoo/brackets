/*
 * Copyright (c) 2012 Adobe Systems Incorporated. All rights reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */

define({

    "ERROR_RENAMING_DIRECTORY_TITLE": "Error Renaming Directory",
    "DETECTED_EXCLUSION_TITLE": "JavaScript File Inference Problem",
    "OK": "OK",
    "PICK_A_FOLDER_TO_MOVE_TO": "Pick a folder",
    "FILE_EXISTS_ERR": "The file or directory already exists.",
    "DRAG_AREA_UPLOAD_FILES_DIALOG_TEXT": "...or drag files here.",
    "COLOR_EDITOR_CURRENT_COLOR_SWATCH_TIP": "Current Colour",
    "BUTTON_FROM_YOUR_COMPUTER": "From your Computer...",
    "CMD_FILE_NEW": "New File",
    "BUTTON_NEW_RULE": "New Rule",
    "DND_ERROR_UNTAR": "unable to untar file",
    "FILE": "file",
    "ERROR_CSSQUICKEDIT_BETWEENCLASSES": "CSS Quick Edit: place cursor on a single class name",
    "NO_ARGUMENTS": "&lt;no parameters&gt;",
    "ERROR_MOVING_FILE_DIALOG_HEADER": "Move Error",
    "CMD_COPY": "Copy",
    "DROP_AREA_UPLOAD_FILES_DIALOG_TEXT": "OK, release the files!",
    "DIRECTORY_NAMES_LEDE": "Directory names",
    "OPEN_DIALOG_ERROR": "An error occurred when showing the open file dialog. (error {0})",
    "UPLOAD_FILES_DIALOG_HEADER": "Upload Files",
    "EXT_MODIFIED_TITLE": "External Changes",
    "COLOR_EDITOR_RGBA_BUTTON_TIP": "RGBa Format",
    "EXCEEDS_MAX_FILE_SIZE": "Files larger than {0} MB cannot be opened in {APP_NAME}.",
    "FILENAMES_LEDE": "Filenames",
    "ERROR_TIMINGQUICKEDIT_INVALIDSYNTAX": "CSS Timing Function Quick Edit: invalid syntax",
    "CMD_TOGGLE_QUICK_EDIT": "Quick Edit",
    "COLOR_EDITOR_ORIGINAL_COLOR_SWATCH_TIP": "Original Colour",
    "INVALID_FILENAME_TITLE": "Invalid File Name",
    "CONFIRM_FOLDER_DELETE_TITLE": "Confirm Delete",
    "NOT_FOUND_ERR": "The file/directory could not be found.",
    "READ_DIRECTORY_ENTRIES_ERROR": "An error occurred when reading the contents of the directory &lt;span class=&#39;dialog-filename&#39;&gt;{0}&lt;/span&gt;. (error {1})",
    "FILE_DELETED_TITLE": "File Deleted",
    "UPLOADING_INDICATOR": "Uploading...",
    "INVALID_FILENAME_MESSAGE": "File names cannot use any system reserved words, end with dots (.) or use any of the following characters: &lt;code class=&#39;emphasized&#39;&gt;{1}&lt;/code&gt;",
    "ERROR_RENAMING_DIRECTORY": "An error occurred when trying to rename the directory &lt;span class=&#39;dialog-filename&#39;&gt;{0}&lt;/span&gt;. {1}",
    "DIRECTORY_NAME": "Directory Name",
    "ERROR_SAVING_FILE": "An error occurred when trying to save the file &lt;span class=&#39;dialog-filename&#39;&gt;{0}&lt;/span&gt;. {1}",
    "DONE": "Done",
    "DND_SUCCESS_UNTAR": "Successfully untarred &lt;b&gt;{0}&lt;/b&gt;.",
    "DND_SUCCESS_UNZIP_TITLE": "Unzip Completed Successfully",
    "CMD_SHOW_PARAMETER_HINT": "Show Parameter Hint",
    "FILENAME": "Filename",
    "DND_ERROR_UNZIP": "unable to unzip file",
    "ERROR_RENAMING_FILE_TITLE": "Error Renaming File",
    "DND_SUCCESS_UNZIP": "Successfully unzipped &lt;b&gt;{0}&lt;/b&gt;.",
    "CMD_FILE_NEW_FOLDER": "New Folder",
    "COLOR_EDITOR_HSLA_BUTTON_TIP": "HSLa Format",
    "ERROR_OPENING_FILES": "An error occurred when trying to open the following files:",
    "BUTTON_YES": "Yes",
    "ERROR_QUICK_EDIT_PROVIDER_NOT_FOUND": "No Quick Edit available for current cursor position",
    "ERROR_DELETING_FILE_TITLE": "Error Deleting File",
    "CMD_TOGGLE_QUICK_DOCS": "Quick Docs",
    "ERROR_CSSQUICKEDIT_UNSUPPORTEDATTR": "CSS Quick Edit: place cursor in tag, class, or id",
    "DOCS_MORE_LINK": "Read more",
    "TAKE_A_SELFIE": "Take a Selfie...",
    "EXT_DELETED_MESSAGE": "&lt;span class=&#39;dialog-filename&#39;&gt;{0}&lt;/span&gt; has been deleted on disc outside of {APP_NAME}, but has unsaved changes in {APP_NAME}.&lt;br /&gt;&lt;br /&gt;Do you want to keep your changes?",
    "ERROR_RENAMING_FILE": "An error occurred when trying to rename the file &lt;span class=&#39;dialog-filename&#39;&gt;{0}&lt;/span&gt;. {1}",
    "ERROR_DELETING_DIRECTORY": "An error occurred when trying to delete the directory &lt;span class=&#39;dialog-filename&#39;&gt;{0}&lt;/span&gt;. {1}",
    "CMD_MOVE_FILE": "Move To...",
    "DELETE": "Delete",
    "ERROR_MAX_FILES_TITLE": "Error Indexing Files",
    "COLOR_EDITOR_USED_COLOR_TIP_PLURAL": "{0} (Used {1} times)",
    "FILE_TITLE": "File",
    "CMD_SELECT_ALL": "Select All",
    "DND_UNSUPPORTED_FILE_TYPE": "unsupported file type",
    "CMD_FILE_RENAME": "Rename",
    "PROJECT_ROOT": "Project Root",
    "INVALID_DIRNAME_TITLE": "Invalid Directory Name",
    "ERROR_JSQUICKEDIT_FUNCTIONNOTFOUND": "JS Quick Edit: place cursor in function name",
    "CONFIRM_FOLDER_DELETE": "Are you sure you want to delete the folder &lt;span class=&#39;dialog-filename&#39;&gt;{0}&lt;/span&gt;?",
    "DIRECTORY_TITLE": "Directory",
    "BUTTON_NO": "No",
    "ERROR_DELETING_FILE": "An error occurred when trying to delete the file &lt;span class=&#39;dialog-filename&#39;&gt;{0}&lt;/span&gt;. {1}",
    "ERROR_CSSQUICKEDIT_CLASSNOTFOUND": "CSS Quick Edit: incomplete class attribute",
    "CMD_PASTE": "Paste",
    "CMD_ENABLE_QUICK_VIEW": "Quick View on Hover",
    "COLOR_EDITOR_HEX_BUTTON_TIP": "Hex Format",
    "EXT_MODIFIED_WARNING": "&lt;span class=&#39;dialog-filename&#39;&gt;{0}&lt;/span&gt; has been modified on disc outside of {APP_NAME}.&lt;br /&gt;&lt;br /&gt;Do you want to save the file and overwrite those changes?",
    "DND_MAX_FILE_SIZE_EXCEEDED": "file exceeds maximum supported size: 3MB",
    "CMD_JUMPTO_DEFINITION": "Jump to Definition",
    "ERROR_MOVING_FILE_SAME_NAME": "A file or folder with the name {0} already exists in {1}. Consider renaming either one to continue.",
    "ERROR_DELETING_DIRECTORY_TITLE": "Error Deleting Directory",
    "DND_SUCCESS_UNTAR_TITLE": "Untar Completed Successfully",
    "SAVE_AND_OVERWRITE": "Overwrite",
    "CMD_FILE_DELETE": "Delete",
    "CANCEL": "Cancel",
    "NOT_READABLE_ERR": "The file/directory could not be read.",
    "DIRECTORY": "directory",
    "ERROR_QUICK_DOCS_PROVIDER_NOT_FOUND": "No Quick Docs available for current cursor position",
    "GENERIC_ERROR": "(error {0})",
    "ERROR_CREATING_FILE_TITLE": "Error Creating File",
    "ERROR_CREATING_FILE": "An error occurred when trying to create the file &lt;span class=&#39;dialog-filename&#39;&gt;{1}&lt;/span&gt;. {2}",
    "ERROR_OPENING_FILE_TITLE": "Error Opening File",
    "EXT_MODIFIED_MESSAGE": "&lt;span class=&#39;dialog-filename&#39;&gt;{0}&lt;/span&gt; has been modified on disc outside of {APP_NAME}, but also has unsaved changes in {APP_NAME}.&lt;br /&gt;&lt;br /&gt;Which version do you want to keep?",
    "ERROR_CSSQUICKEDIT_IDNOTFOUND": "CSS Quick Edit: incomplete id attribute",
    "ERROR_OPENING_FILE": "An error occurred when trying to open the file &lt;span class=&#39;dialog-filename&#39;&gt;{0}&lt;/span&gt;. {1}",
    "ERROR_CREATING_DIRECTORY": "An error occurred when trying to create the directory &lt;span class=&#39;dialog-filename&#39;&gt;{1}&lt;/span&gt;. {2}",
    "UNEXPECTED_ERROR_MOVING_FILE": "An unexpected error occurred when attempting to move {0} to {1}",
    "CMD_CUT": "Cut",
    "ERROR_CREATING_DIRECTORY_TITLE": "Error Creating Directory",
    "ENTRY_WITH_SAME_NAME_EXISTS": "A file or directory with the name &lt;span class=&#39;dialog-filename&#39;&gt;{0}&lt;/span&gt; already exists.",
    "ERROR_SAVING_FILE_TITLE": "Error Saving File",
    "INVALID_DIRNAME_MESSAGE": "Directory names cannot use any system reserved words, end with dots (.) or use any of the following characters: &lt;code class=&#39;emphasized&#39;&gt;{1}&lt;/code&gt;",
    "COLOR_EDITOR_USED_COLOR_TIP_SINGULAR": "{0} (Used {1} time)"
});
