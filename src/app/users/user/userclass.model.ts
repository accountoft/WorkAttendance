
export class UserClass{
        private id: string;
        private firstName: string;
        private lastName: string;
        private email: string;
        private isTimeAttendanceUser: boolean;
        private IsArchived: boolean;
        private hasUserAccount: boolean;
        private sendInvite: boolean;


        constructor(id: string, firstName:string, lastName: string, email: string, isTimeAttendanceUser: boolean, IsArchived: boolean, hasUserAccount:boolean, sendInvite: boolean){
                this.id=id;
                this.firstName=firstName;
                this.lastName=lastName;
                this.email=email;
                this.isTimeAttendanceUser=isTimeAttendanceUser;
                this.IsArchived=IsArchived;
                this.hasUserAccount=hasUserAccount;
                this.sendInvite=sendInvite;
        }

        getName(): string {
            return `${this.firstName} ${this.lastName}`;
          }
          getId(): string {
            return `${this.id}`;
          }



}