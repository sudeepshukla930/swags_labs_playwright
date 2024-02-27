import { Workbook, Worksheet } from 'exceljs';
import { Page } from 'playwright';

export class ExcelReader {
    static async readExcel(filePath: string, sheetName: string): Promise<any[][]> {
        const workbook = new Workbook();
        await workbook.xlsx.readFile(filePath);
       
        const  worksheet: Worksheet | undefined = workbook.getWorksheet(sheetName);
        if (!worksheet) {
            throw new Error(`Sheet '${sheetName}' not found in the Excel file.`);
        }

        const data: any[][] = [];
       
        worksheet.eachRow((row, rowNumber) => {
            const rowData: any[] = [];
            row.eachCell((cell, colNumber) => {
                rowData.push(cell.value);
            });
            data.push(rowData);
        });

        return data;
    }
}
