var app = new Vue ({
	el:'#root',
	data:{
		colorgrey: '',
		index : 0,
		messageSent: '',
		search: '',
		messageindex: null,
		contacts: [
			{
				name: 'Michele',
				avatar: '_1',
				visible: true,
				messages: [
					{
						date: dayjs().subtract(1, 'h').format('HH:mm'),
						text: 'Hai portato a spasso il cane?',
						status: 'sent'
					},
					{
						date: dayjs().subtract(59, 'm').format('HH:mm'),
						text: 'Ricordati di dargli da mangiare',
						status: 'sent'
					},
					{
						date: dayjs().subtract(2, 'm',).format('HH:mm'),
						text: 'Tutto fatto!',
						status: 'received'
					}
				],
			},
			{
				name: 'Fabio',
				avatar: '_2',
				visible: true,
				messages: [
					{
						date: dayjs().subtract(2, 'h').subtract(1, 'm').format('HH:mm'),
						text: 'Ciao come stai?',
						status: 'sent'
					},
					{
						date: dayjs().subtract(1, 'h').subtract(58, 'm').format('HH:mm'),
						text: 'Bene grazie! Stasera ci vediamo?',
						status: 'received'
					},
					{
						date: dayjs().subtract(1, 'h').format('HH:mm'),
						text: 'Mi piacerebbe ma devo andare a fare la spesa.',
						status: 'sent'
					}
				],
			},
			{
				name: 'Samuele',
				avatar: '_3',
				visible: true,
				messages: [
					{
						date: dayjs().subtract(50, 'm').format('HH:mm'),
						text: 'La Marianna va in campagna',
						status: 'received'
					},
					{
						date: dayjs().subtract(30, 'm').format('HH:mm'),
						text: 'Sicuro di non aver sbagliato chat?',
						status: 'sent'
					},
					{
						date: dayjs().subtract(27, 'm').format('HH:mm'),
						text: 'Ah scusa!',
						status: 'received'
					}
				],
			},
			{
				name: 'Luisa',
				avatar: '_4',
				visible: true,
				messages: [
					{
						date: dayjs().subtract(7, 'h',).format('HH:mm'),
						text: 'Lo sai che ha aperto una nuova pizzeria?',
						status: 'sent'
					},
					{
						date: dayjs().subtract(6, 'h').subtract(50, 'm').format('HH:mm'),
						text: 'Si, ma preferirei andare al cinema',
						status: 'received'
					}
				],
			},
			{
				name: 'Nicolò',
				avatar: '_6',
				visible: true,
				messages: [
					{
						date: dayjs().subtract(4, 'h').subtract(50, 'm').format('HH:mm'),
						text: 'Apicetti?',
						status: 'sent'
					},
					{
						date: dayjs().subtract(3, 'h').subtract(50, 'm').format('HH:mm'),
						text: 'O non apicetti?',
						status: 'received'
					}
				],
			},
			{
				name: 'Claudio',
				avatar: '_6',
				visible: true,
				messages: [
					{
						date: dayjs().subtract(6, 'h').subtract(50, 'm').format('HH:mm'),
						text: 'KEKW!',
						status: 'sent'
					},
					{
						date: dayjs().subtract(6, 'h').subtract(30, 'm').format('HH:mm'),
						text: 'KEKW',
						status: 'received'
					}
				],
			},
		]
	}, //fine data
	computed: {
			// filteredContacts() {
			// 		return this.contacts.filter(
			// 				element => {
			// 						return element.name.toLocaleLowerCase().includes(this.search.toLowerCase());
			// 				}
			// 		);
			// }
	},
	methods:{
		//Settare posizione user a sinistra
		setIuser: function (position) {
			this.index = position;
			return this.index;
		},
		sendMessage: function() {
			let sendmessage = {
				date: dayjs().format('HH:mm'),
				text:this.messageSent,
				status: 'sent'
			};
			this.contacts[this.index].messages.push(sendmessage);
			this.messageSent = '';

			setTimeout(
				() =>{
					let messagereceived = {
						date: dayjs().format('HH:mm'),
						text: "Va bene,ci sentiamo più tardi.",
						status: 'received'
					}
					this.contacts[this.index].messages.push(messagereceived);
				},2000
			);
		},
		deletemessage: function(message){
			this.contacts[this.index].messages.splice(message,1);
		}
	}//fine methods
}) //fine vue


// clickgrey: function(event) {
// 	this.colorgrey = 'grey';
// }

// computedgrey: function(){
// 	return this.colorgrey;
// }


//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\//

// dropdown: function (imess) {
// 	this.contacts[this.index].messages =
// 	this.contacts[this.index].messages.map((message,i) => {
// 		if (imess == i) {
// 			return {
// 				...message,
// 				option:true,
// 			}
// 		}else {
// 				return {
// 					...message,
// 					option: false
// 				}
// 		}
// 	})
// }
