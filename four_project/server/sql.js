module.exports = {
    adminEmail: {
        query: 'SELECT * FROM user WHERE email = ?',
      },
    adeList : {
        query:`select f1.*, f2.path, f3.category1, f3.category2, f3.category3
                from f_ade f1, ade_image f2, f_category f3
                where f1.id = f2.product_id and f2.type = 1 and f1.category_id = f3.id;`
    },
    bakeryList : {
        query:`select f1.*, f2.path, f3.category1, f3.category2, f3.category3
                from f_bakery f1, bakery_image f2, f_category f3
                where f1.id =  f2.product_id and f2.type = 1 and f1.category_id = f3.id;`
    },
    coffeeList : {
        query:`select f1.*, f2.path, f3.category1, f3.category2, f3.category3
                from f_coffee f1, coffee_image f2, f_category f3
                where f1.id =  f2.product_id and f2.type = 1 and f1.category_id = f3.id;`
    },
    teaList : {
        query:`select f1.*, f2.path, f3.category1, f3.category2, f3.category3
                from f_tea f1, tea_image f2, f_category f3
                where f1.id =  f2.product_id and f2.type = 1 and f1.category_id = f3.id;`
    },
    adeDetail: {
        query: `select f1.*, f2.path, f2.type, f3.category1, f3.category2, f3.category3
                from f_ade f1, ade_image f2, f_category f3
                where f1.id = ? and f1.id = f2.product_id and f2.type = 1 and f1.category_id = f3.id;`
    },
    coffeeDetail : {
        query:`select f1.*,f2.path, f2.type, f3.category1, f3.category2, f3.category3
                from f_coffee f1, coffee_image f2, f_category f3
                where f1.id = ? and f2.product_id and f2.type = 1 and f1.category_id = f3.id;`
    },
    bakeryDetail : {
        query:`select f1.*,f2.path, f2.type, f3.category1, f3.category2, f3.category3
                from f_bakery f1, bakery_image f2, f_category f3
                where f1.id = ? and f1.id = f2.product_id and f2.type = 1 and f1.category_id = f3.id;`
    },
    teaDetail : {
        query:`select f1.*,f2.path, f2.type, f3.category1, f3.category2, f3.category3
                from f_tea f1, tea_image f2, f_category f3
                where f1.id = ? and f1.id = f2.product_id and f2.type = 1 and f1.category_id = f3.id;`
    },
    coffeeDetail2: {
        query: `select f1.*, f2.path, f2.type, f3.category1, f3.category2, f3.category3
        from f_coffee f1, coffee_image f2, f_category f3
        where f1.id = ? and f1.id = f2.product_id and f2.type = 1 and f1.category_id = f3.id;`
    },
    adeDetail2: {
        query: `select f1.*, f2.path, f2.type, f3.category1, f3.category2, f3.category3
        from f_ade f1, ade_image f2, f_category f3
        where f1.id = ? and f1.id = f2.product_id and f2.type = 1 and f1.category_id = f3.id;`
    },
    adeUpdate: {
		query: `update f_ade set product_name=?,product_price=?, category_id=?, tags=?,outbound_days=?
             	 where id = ?`
    },
    coffeeUpdate: {
		query: `update f_coffee set product_name=?,product_price=?, category_id=?, tags=?,outbound_days=?
             	 where id = ?`
    },
    adeInsert : {
        query:'insert into f_ade set ?'
    },
    coffeeInsert : {
        query:'insert into f_coffee set ?'
    },
    bakeryInsert : {
        query:'insert into f_bakery set ?'
    },
    teaInsert : {
        query:'insert into f_tea set ?'
    },
    categoryList: {
        query: 'select * from f_category'
    },
    coffeeDelete: {
		query: 'delete from f_coffee where id = ?'
	},
    adeDelete: {
		query: 'delete from f_ade where id = ?'
	},
    bakeryDelete: {
		query: 'delete from f_bakery where id = ?'
	},
    teaDelete: {
		query: 'delete from f_tea where id = ?'
	},
    coffeeList2: {
		query: `select f3. *, f4.path
                from(select f1.*,f2.category1,f2.category2,f2.category3
                from f_coffee f1
                left join f_category f2 on f1.category_id = f2.id)f3
                left join coffee_image f4 on f3.id = f4.product_id and f4.type = 1`
	},
    adeList2: {
		query: `select f3.*, f4.path from (select f1.*, f2.category1, f2.category2, f2.category3
		  from f_ade f1, f_category f2
		  where f1.category_id = f2.id) f3
		  left join (select * from ade_image where type=1) f4
		  on f3.id = f4.product_id`
	},
    bakeryList2: {
		query: `select f3.*, f4.path from (select f1.*, f2.category1, f2.category2, f2.category3
		  from f_bakery f1, f_category f2
		  where f1.category_id = f2.id) f3
		  left join (select * from bakery_image where type=1) f4
		  on f3.id = f4.product_id`
	},
    teaList2: {
		query: `select f3.*, f4.path from (select f1.*, f2.category1, f2.category2, f2.category3
		  from f_tea f1, f_category f2
		  where f1.category_id = f2.id) f3
		  left join (select * from tea_image where type=1) f4
		  on f3.id = f4.product_id`
	},
    coffeeImageInsert: {
        query: 'insert into coffee_image set ?'
    },
    adeImageInsert: {
        query: 'insert into ade_image set ?'
    },
    bakeryImageInsert: {
        query: 'insert into bakery_image set ?'
    },
    teaImageInsert: {
        query: 'insert into tea_image set ?'
    },
    adeimageList: {
        query: 'select * from ade_image where product_id=?'
    },
    coffeeimageList: {
        query: 'select * from coffee_image where product_id=?'
    },
    bakeryimageList: {
        query: 'select * from bakery_image where product_id=?'
    },
    teaimageList: {
        query: 'select * from tea_image where product_id=?'
    },
    coffeeimageDelete: {
        query: 'delete from coffee_image where id=?'
    },
    adeimageDelete: {
        query: 'delete from ade_image where id=?'
    },
    bakeryimageDelete: {
        query: 'delete from bakery_image where id=?'
    },
    teaimageDelete: {
        query: 'delete from tea_image where id=?'
    },
    coffeeMainImageInsert: {
        query: 'select * from coffee_image where product_id = ? and type = 2'
    },
    adeMainImageInsert: {
        query: 'select * from ade_image where product_id = ? and type = 2'
    },
    bakeryMainImageInsert: {
        query: 'select * from bakery_image where product_id = ? and type = 2'
    },
    teaMainImageInsert: {
        query: 'select * from tea_image where product_id = ? and type = 2'
    },
    coffeeImageList: {
        query: 'select * from coffee_image where product_id=?'
    },
}
