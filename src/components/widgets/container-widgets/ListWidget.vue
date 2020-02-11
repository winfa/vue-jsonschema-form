<template>
	<div>
		<!-- <h4 class="mb-3 font-weight-bolder text-info">Language</h4> -->

		<div v-for="(item, index) in listItems" :key="index"
				class="card d-flex flex-row align-items-center position-relative">
			<div class="card-body">
				{{ item.title }}
			</div>

			<div class="item-actions h-100 position-absolute d-flex justify-content-start">
				<div class="edit-item item-action h-100 d-flex align-items-center justify-content-center" @click="goListItem(index)">
					<b-icon icon="option" aria-hidden="true"></b-icon>
				</div>

				<div class="delete-item item-action h-100 d-flex align-items-center justify-content-center">
					<b-icon icon="trash" aria-hidden="true"></b-icon>
				</div>
			</div>
		</div>

		<div class="array-widget-footer mt-2">
			<button type="button" class="btn btn-info btn-sm">
				Create New <b-icon icon="plus" aria-hidden="true"></b-icon>
			</button>
		</div>

	</div>
</template>

<script>
export default {
	setup: ({ listItems }, { root: { $router } }) => {
		return {
			goListItem(index) {
				$router.push({ params: { id: listItems[index].mappingPath } })
			}
		}
	},

	props: {
		listItems: {
			type: Array,
		},
		activeIndex: {
			type: Number,
		}
	}
}

</script>

<style scoped>
.card .item-actions {
	right: 0;
}

.delete-item {
	color: #f05150;
	width: 3em;
}

.delete-item:hover {
  background-color: #f05150;
  color: #dadada;
}

.edit-item:hover {
  background-color: #ef9521;
  color: #dadada;
}

.edit-item {
	color: #ef9521;
	width: 3em;
}

</style>
