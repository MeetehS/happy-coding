import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const statusBarItem = vscode.window.createStatusBarItem(2);
	statusBarItem.text = 'Happy Coding!';
	statusBarItem.show();
}

export function deactivate() {}
