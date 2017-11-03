﻿import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name:'convertTospaces'
})
export class convertTospacesPipe implements PipeTransform{
    transform(value: string, character: string): string {
        return value.replace(character, ' ');
    }
    
}