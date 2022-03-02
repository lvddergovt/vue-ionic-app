<template>  
	<ion-page>

    <ion-header>
      <ion-toolbar>
        <ion-title>Test</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-item>Item</ion-item>
        <ion-item>Item</ion-item>
        <ion-item>Item</ion-item>
        <ion-item>Item</ion-item>
      </ion-list>
    </ion-content>

  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonTitle, IonContent, IonToolbar, IonList, IonItem } from "@ionic/vue";
export default {
  components: {
    IonPage,
    IonHeader,
    IonTitle,
    IonContent,
    IonToolbar,
    IonList,
    IonItem
  },
};
</script>