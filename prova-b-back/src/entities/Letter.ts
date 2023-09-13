import { Entity, PrimaryColumn , Column } from "typeorm";

@Entity({name:"letters"})
export class Letter {
    @PrimaryColumn({length:1})
    letter: string;

    @Column({nullable: false, type:"integer", default:0})
    count: number;
}
