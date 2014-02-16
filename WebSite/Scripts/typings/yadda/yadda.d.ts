interface ILibrary {
    given(stepText: string, doResult: (args: any) => void): ILibrary;
    when(stepText: string, doResult: (args: any) => void): ILibrary;
    then(stepText: string, doResult: (args: any) => void): ILibrary;
}

declare var require: any;
declare var scenarios: any;
