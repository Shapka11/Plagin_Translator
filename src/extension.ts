import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(

    vscode.commands.registerCommand('translation.text', () => {
      const editor = vscode.window.activeTextEditor;
      if (editor) {
          const document = editor.document;
          editor.edit(editBuilder => {
              editor.selections.forEach(sel => {
                let word = document.getText(sel);
                let line = "";
				let EnMap = new Map([
					[1072, 'f'], 
					[1074, 'd'],
					[1075, 'u'], 
					[1076, 'l'],
					[1077, 't'], 
					[1079, 'p'],
					[1080, 'b'], 
					[1081, 'q'],
					[1082, 'r'], 
					[1083, 'k'],
					[1084, 'v'], 
					[1085, 'y'],
					[1086, 'j'], 
					[1087, 'g'],
					[1088, 'h'], 
					[1089, 'c'],
					[1090, 'n'], 
					[1091, 'e'],
					[1092, 'a'], 
					[1094, 'w'],
					[1095, 'x'], 
					[1096, 'i'],
					[1097, 'o'],
					[1099, 's'], 
					[1100, 'm'],
					[1103, 'z']
				]);

				let CapsEnMap = new Map([
					[1040, 'F'], 
					[1042, 'D'],
					[1043, 'U'], 
					[1044, 'L'],
					[1045, 'T'], 
					[1047, 'P'],
					[1048, 'B'], 
					[1049, 'Q'],
					[1050, 'R'], 
					[1051, 'K'],
					[1052, 'V'], 
					[1053, 'Y'],
					[1054, 'J'], 
					[1055, 'G'],
					[1056, 'H'], 
					[1057, 'C'],
					[1058, 'N'], 
					[1059, 'E'],
					[1060, 'A'], 
					[1062, 'W'],
					[1063, 'X'], 
					[1064, 'I'],
					[1065, 'O'],
					[1067, 'S'], 
					[1068, 'M'],
					[1071, 'Z']
				]);

				for (let i=0; i<word.length; i++) {
					let char_code = word.charCodeAt(i);
					if(EnMap.get(char_code) !== undefined){
						line += EnMap.get(char_code);
					} else if(CapsEnMap.get(char_code) !== undefined){
						line += CapsEnMap.get(char_code);
					} else {
						line += word[i];
					}
				}
                  editBuilder.replace(sel, line);
              });	
          });
      }
    }),
  );
}