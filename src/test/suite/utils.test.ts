// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import { assert } from 'console';

describe('Extension Test Suite', () => {
  vscode.window.showInformationMessage('Start all tests.');

  test('Test accelerator execution', async () => {
    assert(true);
  });
});
