var app = new Vue ({
	el:'#root',
	data:{
		colorgrey: '',
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
						date: dayjs().subtract(2, 'h',1, 'm').format('HH:mm'),
						text: 'Ciao come stai?',
						status: 'sent'
					},
					{
						date: dayjs().subtract(1, 'h',40, 'm').format('HH:mm'),
						text: 'Bene grazie! Stasera ci vediamo?',
						status: 'received'
					},
					{
						date: dayjs().subtract(30, 'm').format('HH:mm'),
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
						date: dayjs().subtract(6, 'h', 50, 'm').format('HH:mm'),
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
						date: dayjs().subtract(4, 'h', 50, 'm').format('HH:mm'),
						text: 'Apicetti?',
						status: 'sent'
					},
					{
						date: dayjs().subtract(3, 'h', 50, 'm').format('HH:mm'),
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
						date: dayjs().subtract(6, 'h', 50, 'm').format('HH:mm'),
						text: 'KEKW!',
						status: 'sent'
					},
					{
						date: dayjs().subtract(6, 'h', 30, 'm').format('HH:mm'),
						text: 'KEKW',
						status: 'received'
					}
				],
			},
		]
	}, //fine data
	computed:{

	},
	methods:{

	}//fine methods
}) //fine vue


// clickgrey: function(event) {
// 	this.colorgrey = 'grey';
// }

// computedgrey: function(){
// 	return this.colorgrey;
// }
