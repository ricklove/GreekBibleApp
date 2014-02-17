interface IYaddaLibrary {
    given(stepText: string, doResult: (args: any) => void): IYaddaLibrary;
    when(stepText: string, doResult: (args: any) => void): IYaddaLibrary;
    then(stepText: string, doResult: (args: any) => void): IYaddaLibrary;
}

declare var require: any;
declare var scenarios: any;
