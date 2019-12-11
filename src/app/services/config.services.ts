import { Injectable, NgZone } from "@angular/core";
import { knownFolders, Folder, File } from "tns-core-modules/file-system";

@Injectable({
    providedIn: "root"
})
export class ConfigService {
    /**
     * Messages d'informations diffusés au fil de l'eau
     */
    infos: string;
    debug:boolean;

    docs: Folder;
    dos: Folder;
    file: File;

    url:string;
    /**
     * Service central pour la gestion des données statiques de l'application
     * @param http Appels de données AJAX
     */
    constructor() {
        // Préparation de la lecture du fichier de configuration locale
        this.docs = <Folder>knownFolders.currentApp();
        this.dos = <Folder>this.docs.getFolder("QRConfig");
        this.file = <File>this.dos.getFile("config.txt");

        this.litConfig();

        this.debug = false;
    }
    /**
     * Réécrire l'adresse du serveur en local
     * @param u Adresse du serveur (par défaut http://neoakitania.ddns.net/)
     */
    setConfig(u:string="http://www.exlineo.com") {
        console.log("fichier", this.file);
        if(u.indexOf('http') == -1){
            u = 'http://'+u;
        }
        this.file.writeText(u)
            .then((result) => {
                this.litConfig();
        }).catch((err) => {
            console.log(err.stack);
        });
    }
    /**
     * Récupérer les données du fichier local
     */
    litConfig(){
        this.file.readText()
            .then((res) => {
                console.log("Fichier local", res, res.length);
                if(res.length > 0){
                    this.url = res;
                    this.debugInfos("Lit config", "Url captée : "+this.url);
                }else{
                    this.debugInfos("Lit config", "Aucune URL n'a été trouvée, merci d'en paramétrer une");
                }
            })
            .catch((err) => {
                console.log(err.stack);
                // this.setConfig();
            });
    }
    /**
     * 
     * @param t Titre du déboggage
     * @param m 
     */
    debugInfos(t:string, m:string){
        if(this.debug){
            alert({
                title: t,
                message: m,
                okButtonText: "OK"
            });
        }
    }
}