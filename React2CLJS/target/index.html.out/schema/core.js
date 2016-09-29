// Compiled by ClojureScript 1.7.228 {}
goog.provide('schema.core');
goog.require('cljs.core');
goog.require('schema.spec.collection');
goog.require('schema.spec.core');
goog.require('schema.spec.variant');
goog.require('schema.spec.leaf');
goog.require('clojure.string');
goog.require('schema.utils');

/**
 * @interface
 */
schema.core.Schema = function(){};

/**
 * A spec is a record of some type that expresses the structure of this schema
 *   in a declarative and/or imperative way.  See schema.spec.* for examples.
 */
schema.core.spec = (function schema$core$spec(this$){
if((!((this$ == null))) && (!((this$.schema$core$Schema$spec$arity$1 == null)))){
return this$.schema$core$Schema$spec$arity$1(this$);
} else {
var x__7110__auto__ = (((this$ == null))?null:this$);
var m__7111__auto__ = (schema.core.spec[goog.typeOf(x__7110__auto__)]);
if(!((m__7111__auto__ == null))){
return m__7111__auto__.call(null,this$);
} else {
var m__7111__auto____$1 = (schema.core.spec["_"]);
if(!((m__7111__auto____$1 == null))){
return m__7111__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Schema.spec",this$);
}
}
}
});

/**
 * Expand this schema to a human-readable format suitable for pprinting,
 *   also expanding class schematas at the leaves.  Example:
 * 
 *   user> (s/explain {:a s/Keyword :b [s/Int]} )
 *   {:a Keyword, :b [Int]}
 */
schema.core.explain = (function schema$core$explain(this$){
if((!((this$ == null))) && (!((this$.schema$core$Schema$explain$arity$1 == null)))){
return this$.schema$core$Schema$explain$arity$1(this$);
} else {
var x__7110__auto__ = (((this$ == null))?null:this$);
var m__7111__auto__ = (schema.core.explain[goog.typeOf(x__7110__auto__)]);
if(!((m__7111__auto__ == null))){
return m__7111__auto__.call(null,this$);
} else {
var m__7111__auto____$1 = (schema.core.explain["_"]);
if(!((m__7111__auto____$1 == null))){
return m__7111__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Schema.explain",this$);
}
}
}
});

/**
 * Compile an efficient checker for schema, which returns nil for valid values and
 * error descriptions otherwise.
 */
schema.core.checker = (function schema$core$checker(schema__$1){
return cljs.core.comp.call(null,schema.utils.error_val,schema.spec.core.run_checker.call(null,(function (s,params){
return schema.spec.core.checker.call(null,schema.core.spec.call(null,s),params);
}),false,schema__$1));
});
/**
 * Return nil if x matches schema; otherwise, returns a value that looks like the
 * 'bad' parts of x with ValidationErrors at the leaves describing the failures.
 * 
 * If you will be checking many datums, it is much more efficient to create
 * a 'checker' once and call it on each of them.
 */
schema.core.check = (function schema$core$check(schema__$1,x){
return schema.core.checker.call(null,schema__$1).call(null,x);
});
/**
 * Compile an efficient validator for schema.
 */
schema.core.validator = (function schema$core$validator(schema__$1){
var c = schema.core.checker.call(null,schema__$1);
return ((function (c){
return (function (value){
var temp__4425__auto___9389 = c.call(null,value);
if(cljs.core.truth_(temp__4425__auto___9389)){
var error_9390 = temp__4425__auto___9389;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Value does not match schema: %s",cljs.core.pr_str.call(null,error_9390)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"error","error",-978969032),error_9390], null));
} else {
}

return value;
});
;})(c))
});
/**
 * Throw an exception if value does not satisfy schema; otherwise, return value.
 * If you will be validating many datums, it is much more efficient to create
 * a 'validator' once and call it on each of them.
 */
schema.core.validate = (function schema$core$validate(schema__$1,value){
return schema.core.validator.call(null,schema__$1).call(null,value);
});
schema.core.instance_precondition = (function schema$core$instance_precondition(s,klass){
return schema.spec.core.precondition.call(null,s,(function (p1__9391_SHARP_){
var and__6443__auto__ = !((p1__9391_SHARP_ == null));
if(and__6443__auto__){
var or__6455__auto__ = (klass === p1__9391_SHARP_.constructor);
if(or__6455__auto__){
return or__6455__auto__;
} else {
return p1__9391_SHARP_ instanceof klass;
}
} else {
return and__6443__auto__;
}
}),(function (p1__9392_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__9392_SHARP_),klass),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
}));
});
(schema.core.Schema["function"] = true);

(schema.core.spec["function"] = (function (this$){
var pre = schema.core.instance_precondition.call(null,this$,this$);
var temp__4423__auto__ = schema.utils.class_schema.call(null,this$);
if(cljs.core.truth_(temp__4423__auto__)){
var class_schema = temp__4423__auto__;
return schema.spec.variant.variant_spec.call(null,pre,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),class_schema], null)], null));
} else {
return schema.spec.leaf.leaf_spec.call(null,pre);
}
}));

(schema.core.explain["function"] = (function (this$){
var temp__4423__auto__ = schema.utils.class_schema.call(null,this$);
if(cljs.core.truth_(temp__4423__auto__)){
var more_schema = temp__4423__auto__;
return schema.core.explain.call(null,more_schema);
} else {
var pred__9393 = cljs.core._EQ_;
var expr__9394 = this$;
if(cljs.core.truth_(pred__9393.call(null,null,expr__9394))){
return new cljs.core.Symbol(null,"Str","Str",907970895,null);
} else {
if(cljs.core.truth_(pred__9393.call(null,Boolean,expr__9394))){
return new cljs.core.Symbol(null,"Bool","Bool",195910502,null);
} else {
if(cljs.core.truth_(pred__9393.call(null,Number,expr__9394))){
return new cljs.core.Symbol(null,"Num","Num",-2044934708,null);
} else {
if(cljs.core.truth_(pred__9393.call(null,null,expr__9394))){
return new cljs.core.Symbol(null,"Regex","Regex",205914413,null);
} else {
if(cljs.core.truth_(pred__9393.call(null,Date,expr__9394))){
return new cljs.core.Symbol(null,"Inst","Inst",292408622,null);
} else {
if(cljs.core.truth_(pred__9393.call(null,cljs.core.UUID,expr__9394))){
return new cljs.core.Symbol(null,"Uuid","Uuid",-1866694318,null);
} else {
return this$;
}
}
}
}
}
}
}
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.AnythingSchema = (function (_,__meta,__extmap,__hash){
this._ = _;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7069__auto__,k__7070__auto__){
var self__ = this;
var this__7069__auto____$1 = this;
return cljs.core._lookup.call(null,this__7069__auto____$1,k__7070__auto__,null);
});

schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7071__auto__,k9397,else__7072__auto__){
var self__ = this;
var this__7071__auto____$1 = this;
var G__9399 = (((k9397 instanceof cljs.core.Keyword))?k9397.fqn:null);
switch (G__9399) {
case "_":
return self__._;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9397,else__7072__auto__);

}
});

schema.core.AnythingSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7083__auto__,writer__7084__auto__,opts__7085__auto__){
var self__ = this;
var this__7083__auto____$1 = this;
var pr_pair__7086__auto__ = ((function (this__7083__auto____$1){
return (function (keyval__7087__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7084__auto__,cljs.core.pr_writer,""," ","",opts__7085__auto__,keyval__7087__auto__);
});})(this__7083__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7084__auto__,pr_pair__7086__auto__,"#schema.core.AnythingSchema{",", ","}",opts__7085__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"_","_",1453416199),self__._],null))], null),self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IIterable$ = true;

schema.core.AnythingSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9396){
var self__ = this;
var G__9396__$1 = this;
return (new cljs.core.RecordIter((0),G__9396__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_","_",1453416199)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.AnythingSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7067__auto__){
var self__ = this;
var this__7067__auto____$1 = this;
return self__.__meta;
});

schema.core.AnythingSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7063__auto__){
var self__ = this;
var this__7063__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.AnythingSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7073__auto__){
var self__ = this;
var this__7073__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7064__auto__){
var self__ = this;
var this__7064__auto____$1 = this;
var h__6890__auto__ = self__.__hash;
if(!((h__6890__auto__ == null))){
return h__6890__auto__;
} else {
var h__6890__auto____$1 = cljs.core.hash_imap.call(null,this__7064__auto____$1);
self__.__hash = h__6890__auto____$1;

return h__6890__auto____$1;
}
});

schema.core.AnythingSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7065__auto__,other__7066__auto__){
var self__ = this;
var this__7065__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6443__auto__ = other__7066__auto__;
if(cljs.core.truth_(and__6443__auto__)){
var and__6443__auto____$1 = (this__7065__auto____$1.constructor === other__7066__auto__.constructor);
if(and__6443__auto____$1){
return cljs.core.equiv_map.call(null,this__7065__auto____$1,other__7066__auto__);
} else {
return and__6443__auto____$1;
}
} else {
return and__6443__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.AnythingSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7078__auto__,k__7079__auto__){
var self__ = this;
var this__7078__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"_","_",1453416199),null], null), null),k__7079__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7078__auto____$1),self__.__meta),k__7079__auto__);
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7079__auto__)),null));
}
});

schema.core.AnythingSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7076__auto__,k__7077__auto__,G__9396){
var self__ = this;
var this__7076__auto____$1 = this;
var pred__9400 = cljs.core.keyword_identical_QMARK_;
var expr__9401 = k__7077__auto__;
if(cljs.core.truth_(pred__9400.call(null,new cljs.core.Keyword(null,"_","_",1453416199),expr__9401))){
return (new schema.core.AnythingSchema(G__9396,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7077__auto__,G__9396),null));
}
});

schema.core.AnythingSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7081__auto__){
var self__ = this;
var this__7081__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"_","_",1453416199),self__._],null))], null),self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7068__auto__,G__9396){
var self__ = this;
var this__7068__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,G__9396,self__.__extmap,self__.__hash));
});

schema.core.AnythingSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7074__auto__,entry__7075__auto__){
var self__ = this;
var this__7074__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7075__auto__)){
return cljs.core._assoc.call(null,this__7074__auto____$1,cljs.core._nth.call(null,entry__7075__auto__,(0)),cljs.core._nth.call(null,entry__7075__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7074__auto____$1,entry__7075__auto__);
}
});

schema.core.AnythingSchema.prototype.schema$core$Schema$ = true;

schema.core.AnythingSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_);
});

schema.core.AnythingSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Symbol(null,"Any","Any",1277492269,null);
});

schema.core.AnythingSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null);
});

schema.core.AnythingSchema.cljs$lang$type = true;

schema.core.AnythingSchema.cljs$lang$ctorPrSeq = (function (this__7103__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/AnythingSchema");
});

schema.core.AnythingSchema.cljs$lang$ctorPrWriter = (function (this__7103__auto__,writer__7104__auto__){
return cljs.core._write.call(null,writer__7104__auto__,"schema.core/AnythingSchema");
});

schema.core.__GT_AnythingSchema = (function schema$core$__GT_AnythingSchema(_){
return (new schema.core.AnythingSchema(_,null,null,null));
});

schema.core.map__GT_AnythingSchema = (function schema$core$map__GT_AnythingSchema(G__9398){
return (new schema.core.AnythingSchema(new cljs.core.Keyword(null,"_","_",1453416199).cljs$core$IFn$_invoke$arity$1(G__9398),null,cljs.core.dissoc.call(null,G__9398,new cljs.core.Keyword(null,"_","_",1453416199)),null));
});

/**
 * Any value, including nil.
 */
schema.core.Any = (new schema.core.AnythingSchema(null,null,null,null));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.EqSchema = (function (v,__meta,__extmap,__hash){
this.v = v;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7069__auto__,k__7070__auto__){
var self__ = this;
var this__7069__auto____$1 = this;
return cljs.core._lookup.call(null,this__7069__auto____$1,k__7070__auto__,null);
});

schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7071__auto__,k9407,else__7072__auto__){
var self__ = this;
var this__7071__auto____$1 = this;
var G__9409 = (((k9407 instanceof cljs.core.Keyword))?k9407.fqn:null);
switch (G__9409) {
case "v":
return self__.v;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9407,else__7072__auto__);

}
});

schema.core.EqSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7083__auto__,writer__7084__auto__,opts__7085__auto__){
var self__ = this;
var this__7083__auto____$1 = this;
var pr_pair__7086__auto__ = ((function (this__7083__auto____$1){
return (function (keyval__7087__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7084__auto__,cljs.core.pr_writer,""," ","",opts__7085__auto__,keyval__7087__auto__);
});})(this__7083__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7084__auto__,pr_pair__7086__auto__,"#schema.core.EqSchema{",", ","}",opts__7085__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null))], null),self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IIterable$ = true;

schema.core.EqSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9406){
var self__ = this;
var G__9406__$1 = this;
return (new cljs.core.RecordIter((0),G__9406__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.EqSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7067__auto__){
var self__ = this;
var this__7067__auto____$1 = this;
return self__.__meta;
});

schema.core.EqSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7063__auto__){
var self__ = this;
var this__7063__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.EqSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7073__auto__){
var self__ = this;
var this__7073__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7064__auto__){
var self__ = this;
var this__7064__auto____$1 = this;
var h__6890__auto__ = self__.__hash;
if(!((h__6890__auto__ == null))){
return h__6890__auto__;
} else {
var h__6890__auto____$1 = cljs.core.hash_imap.call(null,this__7064__auto____$1);
self__.__hash = h__6890__auto____$1;

return h__6890__auto____$1;
}
});

schema.core.EqSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7065__auto__,other__7066__auto__){
var self__ = this;
var this__7065__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6443__auto__ = other__7066__auto__;
if(cljs.core.truth_(and__6443__auto__)){
var and__6443__auto____$1 = (this__7065__auto____$1.constructor === other__7066__auto__.constructor);
if(and__6443__auto____$1){
return cljs.core.equiv_map.call(null,this__7065__auto____$1,other__7066__auto__);
} else {
return and__6443__auto____$1;
}
} else {
return and__6443__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.EqSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7078__auto__,k__7079__auto__){
var self__ = this;
var this__7078__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),null], null), null),k__7079__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7078__auto____$1),self__.__meta),k__7079__auto__);
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7079__auto__)),null));
}
});

schema.core.EqSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7076__auto__,k__7077__auto__,G__9406){
var self__ = this;
var this__7076__auto____$1 = this;
var pred__9410 = cljs.core.keyword_identical_QMARK_;
var expr__9411 = k__7077__auto__;
if(cljs.core.truth_(pred__9410.call(null,new cljs.core.Keyword(null,"v","v",21465059),expr__9411))){
return (new schema.core.EqSchema(G__9406,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7077__auto__,G__9406),null));
}
});

schema.core.EqSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7081__auto__){
var self__ = this;
var this__7081__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null))], null),self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7068__auto__,G__9406){
var self__ = this;
var this__7068__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,G__9406,self__.__extmap,self__.__hash));
});

schema.core.EqSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7074__auto__,entry__7075__auto__){
var self__ = this;
var this__7074__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7075__auto__)){
return cljs.core._assoc.call(null,this__7074__auto____$1,cljs.core._nth.call(null,entry__7075__auto__,(0)),cljs.core._nth.call(null,entry__7075__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7074__auto____$1,entry__7075__auto__);
}
});

schema.core.EqSchema.prototype.schema$core$Schema$ = true;

schema.core.EqSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,((function (this$__$1){
return (function (p1__9404_SHARP_){
return cljs.core._EQ_.call(null,self__.v,p1__9404_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__9405_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__9405_SHARP_),self__.v),new cljs.core.Symbol(null,"=","=",-1501502141,null));
});})(this$__$1))
));
});

schema.core.EqSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.v),new cljs.core.Symbol(null,"eq","eq",1021992460,null));
});

schema.core.EqSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null);
});

schema.core.EqSchema.cljs$lang$type = true;

schema.core.EqSchema.cljs$lang$ctorPrSeq = (function (this__7103__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/EqSchema");
});

schema.core.EqSchema.cljs$lang$ctorPrWriter = (function (this__7103__auto__,writer__7104__auto__){
return cljs.core._write.call(null,writer__7104__auto__,"schema.core/EqSchema");
});

schema.core.__GT_EqSchema = (function schema$core$__GT_EqSchema(v){
return (new schema.core.EqSchema(v,null,null,null));
});

schema.core.map__GT_EqSchema = (function schema$core$map__GT_EqSchema(G__9408){
return (new schema.core.EqSchema(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__9408),null,cljs.core.dissoc.call(null,G__9408,new cljs.core.Keyword(null,"v","v",21465059)),null));
});

/**
 * A value that must be (= v).
 */
schema.core.eq = (function schema$core$eq(v){
return (new schema.core.EqSchema(v,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Isa = (function (h,parent,__meta,__extmap,__hash){
this.h = h;
this.parent = parent;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7069__auto__,k__7070__auto__){
var self__ = this;
var this__7069__auto____$1 = this;
return cljs.core._lookup.call(null,this__7069__auto____$1,k__7070__auto__,null);
});

schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7071__auto__,k9417,else__7072__auto__){
var self__ = this;
var this__7071__auto____$1 = this;
var G__9419 = (((k9417 instanceof cljs.core.Keyword))?k9417.fqn:null);
switch (G__9419) {
case "h":
return self__.h;

break;
case "parent":
return self__.parent;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9417,else__7072__auto__);

}
});

schema.core.Isa.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7083__auto__,writer__7084__auto__,opts__7085__auto__){
var self__ = this;
var this__7083__auto____$1 = this;
var pr_pair__7086__auto__ = ((function (this__7083__auto____$1){
return (function (keyval__7087__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7084__auto__,cljs.core.pr_writer,""," ","",opts__7085__auto__,keyval__7087__auto__);
});})(this__7083__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7084__auto__,pr_pair__7086__auto__,"#schema.core.Isa{",", ","}",opts__7085__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null))], null),self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IIterable$ = true;

schema.core.Isa.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9416){
var self__ = this;
var G__9416__$1 = this;
return (new cljs.core.RecordIter((0),G__9416__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"parent","parent",-878878779)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Isa.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7067__auto__){
var self__ = this;
var this__7067__auto____$1 = this;
return self__.__meta;
});

schema.core.Isa.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7063__auto__){
var self__ = this;
var this__7063__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Isa.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7073__auto__){
var self__ = this;
var this__7073__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7064__auto__){
var self__ = this;
var this__7064__auto____$1 = this;
var h__6890__auto__ = self__.__hash;
if(!((h__6890__auto__ == null))){
return h__6890__auto__;
} else {
var h__6890__auto____$1 = cljs.core.hash_imap.call(null,this__7064__auto____$1);
self__.__hash = h__6890__auto____$1;

return h__6890__auto____$1;
}
});

schema.core.Isa.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7065__auto__,other__7066__auto__){
var self__ = this;
var this__7065__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6443__auto__ = other__7066__auto__;
if(cljs.core.truth_(and__6443__auto__)){
var and__6443__auto____$1 = (this__7065__auto____$1.constructor === other__7066__auto__.constructor);
if(and__6443__auto____$1){
return cljs.core.equiv_map.call(null,this__7065__auto____$1,other__7066__auto__);
} else {
return and__6443__auto____$1;
}
} else {
return and__6443__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Isa.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7078__auto__,k__7079__auto__){
var self__ = this;
var this__7078__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__7079__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7078__auto____$1),self__.__meta),k__7079__auto__);
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7079__auto__)),null));
}
});

schema.core.Isa.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7076__auto__,k__7077__auto__,G__9416){
var self__ = this;
var this__7076__auto____$1 = this;
var pred__9420 = cljs.core.keyword_identical_QMARK_;
var expr__9421 = k__7077__auto__;
if(cljs.core.truth_(pred__9420.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__9421))){
return (new schema.core.Isa(G__9416,self__.parent,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9420.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__9421))){
return (new schema.core.Isa(self__.h,G__9416,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7077__auto__,G__9416),null));
}
}
});

schema.core.Isa.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7081__auto__){
var self__ = this;
var this__7081__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null))], null),self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7068__auto__,G__9416){
var self__ = this;
var this__7068__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,G__9416,self__.__extmap,self__.__hash));
});

schema.core.Isa.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7074__auto__,entry__7075__auto__){
var self__ = this;
var this__7074__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7075__auto__)){
return cljs.core._assoc.call(null,this__7074__auto____$1,cljs.core._nth.call(null,entry__7075__auto__,(0)),cljs.core._nth.call(null,entry__7075__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7074__auto____$1,entry__7075__auto__);
}
});

schema.core.Isa.prototype.schema$core$Schema$ = true;

schema.core.Isa.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,((function (this$__$1){
return (function (p1__9414_SHARP_){
return cljs.core.isa_QMARK_.call(null,self__.h,p1__9414_SHARP_,self__.parent);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__9415_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.parent),p1__9415_SHARP_),new cljs.core.Symbol(null,"isa?","isa?",1358492324,null));
});})(this$__$1))
));
});

schema.core.Isa.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.parent),new cljs.core.Symbol(null,"isa?","isa?",1358492324,null));
});

schema.core.Isa.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"h","h",-1544777029,null),new cljs.core.Symbol(null,"parent","parent",761652748,null)], null);
});

schema.core.Isa.cljs$lang$type = true;

schema.core.Isa.cljs$lang$ctorPrSeq = (function (this__7103__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Isa");
});

schema.core.Isa.cljs$lang$ctorPrWriter = (function (this__7103__auto__,writer__7104__auto__){
return cljs.core._write.call(null,writer__7104__auto__,"schema.core/Isa");
});

schema.core.__GT_Isa = (function schema$core$__GT_Isa(h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
});

schema.core.map__GT_Isa = (function schema$core$map__GT_Isa(G__9418){
return (new schema.core.Isa(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__9418),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__9418),null,cljs.core.dissoc.call(null,G__9418,new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"parent","parent",-878878779)),null));
});

/**
 * A value that must be a child of parent.
 */
schema.core.isa = (function schema$core$isa(var_args){
var args9424 = [];
var len__7513__auto___9427 = arguments.length;
var i__7514__auto___9428 = (0);
while(true){
if((i__7514__auto___9428 < len__7513__auto___9427)){
args9424.push((arguments[i__7514__auto___9428]));

var G__9429 = (i__7514__auto___9428 + (1));
i__7514__auto___9428 = G__9429;
continue;
} else {
}
break;
}

var G__9426 = args9424.length;
switch (G__9426) {
case 1:
return schema.core.isa.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema.core.isa.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9424.length)].join('')));

}
});

schema.core.isa.cljs$core$IFn$_invoke$arity$1 = (function (parent){
return (new schema.core.Isa(null,parent,null,null,null));
});

schema.core.isa.cljs$core$IFn$_invoke$arity$2 = (function (h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
});

schema.core.isa.cljs$lang$maxFixedArity = 2;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.EnumSchema = (function (vs,__meta,__extmap,__hash){
this.vs = vs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7069__auto__,k__7070__auto__){
var self__ = this;
var this__7069__auto____$1 = this;
return cljs.core._lookup.call(null,this__7069__auto____$1,k__7070__auto__,null);
});

schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7071__auto__,k9434,else__7072__auto__){
var self__ = this;
var this__7071__auto____$1 = this;
var G__9436 = (((k9434 instanceof cljs.core.Keyword))?k9434.fqn:null);
switch (G__9436) {
case "vs":
return self__.vs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9434,else__7072__auto__);

}
});

schema.core.EnumSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7083__auto__,writer__7084__auto__,opts__7085__auto__){
var self__ = this;
var this__7083__auto____$1 = this;
var pr_pair__7086__auto__ = ((function (this__7083__auto____$1){
return (function (keyval__7087__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7084__auto__,cljs.core.pr_writer,""," ","",opts__7085__auto__,keyval__7087__auto__);
});})(this__7083__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7084__auto__,pr_pair__7086__auto__,"#schema.core.EnumSchema{",", ","}",opts__7085__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vs","vs",-2022097090),self__.vs],null))], null),self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IIterable$ = true;

schema.core.EnumSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9433){
var self__ = this;
var G__9433__$1 = this;
return (new cljs.core.RecordIter((0),G__9433__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vs","vs",-2022097090)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.EnumSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7067__auto__){
var self__ = this;
var this__7067__auto____$1 = this;
return self__.__meta;
});

schema.core.EnumSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7063__auto__){
var self__ = this;
var this__7063__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.EnumSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7073__auto__){
var self__ = this;
var this__7073__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7064__auto__){
var self__ = this;
var this__7064__auto____$1 = this;
var h__6890__auto__ = self__.__hash;
if(!((h__6890__auto__ == null))){
return h__6890__auto__;
} else {
var h__6890__auto____$1 = cljs.core.hash_imap.call(null,this__7064__auto____$1);
self__.__hash = h__6890__auto____$1;

return h__6890__auto____$1;
}
});

schema.core.EnumSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7065__auto__,other__7066__auto__){
var self__ = this;
var this__7065__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6443__auto__ = other__7066__auto__;
if(cljs.core.truth_(and__6443__auto__)){
var and__6443__auto____$1 = (this__7065__auto____$1.constructor === other__7066__auto__.constructor);
if(and__6443__auto____$1){
return cljs.core.equiv_map.call(null,this__7065__auto____$1,other__7066__auto__);
} else {
return and__6443__auto____$1;
}
} else {
return and__6443__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.EnumSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7078__auto__,k__7079__auto__){
var self__ = this;
var this__7078__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vs","vs",-2022097090),null], null), null),k__7079__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7078__auto____$1),self__.__meta),k__7079__auto__);
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7079__auto__)),null));
}
});

schema.core.EnumSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7076__auto__,k__7077__auto__,G__9433){
var self__ = this;
var this__7076__auto____$1 = this;
var pred__9437 = cljs.core.keyword_identical_QMARK_;
var expr__9438 = k__7077__auto__;
if(cljs.core.truth_(pred__9437.call(null,new cljs.core.Keyword(null,"vs","vs",-2022097090),expr__9438))){
return (new schema.core.EnumSchema(G__9433,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7077__auto__,G__9433),null));
}
});

schema.core.EnumSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7081__auto__){
var self__ = this;
var this__7081__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vs","vs",-2022097090),self__.vs],null))], null),self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7068__auto__,G__9433){
var self__ = this;
var this__7068__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,G__9433,self__.__extmap,self__.__hash));
});

schema.core.EnumSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7074__auto__,entry__7075__auto__){
var self__ = this;
var this__7074__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7075__auto__)){
return cljs.core._assoc.call(null,this__7074__auto____$1,cljs.core._nth.call(null,entry__7075__auto__,(0)),cljs.core._nth.call(null,entry__7075__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7074__auto____$1,entry__7075__auto__);
}
});

schema.core.EnumSchema.prototype.schema$core$Schema$ = true;

schema.core.EnumSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,((function (this$__$1){
return (function (p1__9431_SHARP_){
return cljs.core.contains_QMARK_.call(null,self__.vs,p1__9431_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__9432_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__9432_SHARP_),self__.vs);
});})(this$__$1))
));
});

schema.core.EnumSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol(null,"enum","enum",-975417337,null),self__.vs);
});

schema.core.EnumSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vs","vs",-381565563,null)], null);
});

schema.core.EnumSchema.cljs$lang$type = true;

schema.core.EnumSchema.cljs$lang$ctorPrSeq = (function (this__7103__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/EnumSchema");
});

schema.core.EnumSchema.cljs$lang$ctorPrWriter = (function (this__7103__auto__,writer__7104__auto__){
return cljs.core._write.call(null,writer__7104__auto__,"schema.core/EnumSchema");
});

schema.core.__GT_EnumSchema = (function schema$core$__GT_EnumSchema(vs){
return (new schema.core.EnumSchema(vs,null,null,null));
});

schema.core.map__GT_EnumSchema = (function schema$core$map__GT_EnumSchema(G__9435){
return (new schema.core.EnumSchema(new cljs.core.Keyword(null,"vs","vs",-2022097090).cljs$core$IFn$_invoke$arity$1(G__9435),null,cljs.core.dissoc.call(null,G__9435,new cljs.core.Keyword(null,"vs","vs",-2022097090)),null));
});

/**
 * A value that must be = to some element of vs.
 */
schema.core.enum$ = (function schema$core$enum(var_args){
var args__7520__auto__ = [];
var len__7513__auto___9442 = arguments.length;
var i__7514__auto___9443 = (0);
while(true){
if((i__7514__auto___9443 < len__7513__auto___9442)){
args__7520__auto__.push((arguments[i__7514__auto___9443]));

var G__9444 = (i__7514__auto___9443 + (1));
i__7514__auto___9443 = G__9444;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((0) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((0)),(0))):null);
return schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic(argseq__7521__auto__);
});

schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic = (function (vs){
return (new schema.core.EnumSchema(cljs.core.set.call(null,vs),null,null,null));
});

schema.core.enum$.cljs$lang$maxFixedArity = (0);

schema.core.enum$.cljs$lang$applyTo = (function (seq9441){
return schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9441));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Predicate = (function (p_QMARK_,pred_name,__meta,__extmap,__hash){
this.p_QMARK_ = p_QMARK_;
this.pred_name = pred_name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7069__auto__,k__7070__auto__){
var self__ = this;
var this__7069__auto____$1 = this;
return cljs.core._lookup.call(null,this__7069__auto____$1,k__7070__auto__,null);
});

schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7071__auto__,k9447,else__7072__auto__){
var self__ = this;
var this__7071__auto____$1 = this;
var G__9449 = (((k9447 instanceof cljs.core.Keyword))?k9447.fqn:null);
switch (G__9449) {
case "p?":
return self__.p_QMARK_;

break;
case "pred-name":
return self__.pred_name;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9447,else__7072__auto__);

}
});

schema.core.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7083__auto__,writer__7084__auto__,opts__7085__auto__){
var self__ = this;
var this__7083__auto____$1 = this;
var pr_pair__7086__auto__ = ((function (this__7083__auto____$1){
return (function (keyval__7087__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7084__auto__,cljs.core.pr_writer,""," ","",opts__7085__auto__,keyval__7087__auto__);
});})(this__7083__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7084__auto__,pr_pair__7086__auto__,"#schema.core.Predicate{",", ","}",opts__7085__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p?","p?",-1172161701),self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),self__.pred_name],null))], null),self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IIterable$ = true;

schema.core.Predicate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9446){
var self__ = this;
var G__9446__$1 = this;
return (new cljs.core.RecordIter((0),G__9446__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p?","p?",-1172161701),new cljs.core.Keyword(null,"pred-name","pred-name",-3677451)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7067__auto__){
var self__ = this;
var this__7067__auto____$1 = this;
return self__.__meta;
});

schema.core.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7063__auto__){
var self__ = this;
var this__7063__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7073__auto__){
var self__ = this;
var this__7073__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7064__auto__){
var self__ = this;
var this__7064__auto____$1 = this;
var h__6890__auto__ = self__.__hash;
if(!((h__6890__auto__ == null))){
return h__6890__auto__;
} else {
var h__6890__auto____$1 = cljs.core.hash_imap.call(null,this__7064__auto____$1);
self__.__hash = h__6890__auto____$1;

return h__6890__auto____$1;
}
});

schema.core.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7065__auto__,other__7066__auto__){
var self__ = this;
var this__7065__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6443__auto__ = other__7066__auto__;
if(cljs.core.truth_(and__6443__auto__)){
var and__6443__auto____$1 = (this__7065__auto____$1.constructor === other__7066__auto__.constructor);
if(and__6443__auto____$1){
return cljs.core.equiv_map.call(null,this__7065__auto____$1,other__7066__auto__);
} else {
return and__6443__auto____$1;
}
} else {
return and__6443__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7078__auto__,k__7079__auto__){
var self__ = this;
var this__7078__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),null,new cljs.core.Keyword(null,"p?","p?",-1172161701),null], null), null),k__7079__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7078__auto____$1),self__.__meta),k__7079__auto__);
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7079__auto__)),null));
}
});

schema.core.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7076__auto__,k__7077__auto__,G__9446){
var self__ = this;
var this__7076__auto____$1 = this;
var pred__9450 = cljs.core.keyword_identical_QMARK_;
var expr__9451 = k__7077__auto__;
if(cljs.core.truth_(pred__9450.call(null,new cljs.core.Keyword(null,"p?","p?",-1172161701),expr__9451))){
return (new schema.core.Predicate(G__9446,self__.pred_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9450.call(null,new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),expr__9451))){
return (new schema.core.Predicate(self__.p_QMARK_,G__9446,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7077__auto__,G__9446),null));
}
}
});

schema.core.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7081__auto__){
var self__ = this;
var this__7081__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p?","p?",-1172161701),self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),self__.pred_name],null))], null),self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7068__auto__,G__9446){
var self__ = this;
var this__7068__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,G__9446,self__.__extmap,self__.__hash));
});

schema.core.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7074__auto__,entry__7075__auto__){
var self__ = this;
var this__7074__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7075__auto__)){
return cljs.core._assoc.call(null,this__7074__auto____$1,cljs.core._nth.call(null,entry__7075__auto__,(0)),cljs.core._nth.call(null,entry__7075__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7074__auto____$1,entry__7075__auto__);
}
});

schema.core.Predicate.prototype.schema$core$Schema$ = true;

schema.core.Predicate.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,self__.p_QMARK_,((function (this$__$1){
return (function (p1__9445_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__9445_SHARP_),self__.pred_name);
});})(this$__$1))
));
});

schema.core.Predicate.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,self__.p_QMARK_,cljs.core.integer_QMARK_)){
return new cljs.core.Symbol(null,"Int","Int",-2116888740,null);
} else {
if(cljs.core._EQ_.call(null,self__.p_QMARK_,cljs.core.keyword_QMARK_)){
return new cljs.core.Symbol(null,"Keyword","Keyword",-850065993,null);
} else {
if(cljs.core._EQ_.call(null,self__.p_QMARK_,cljs.core.symbol_QMARK_)){
return new cljs.core.Symbol(null,"Symbol","Symbol",716452869,null);
} else {
if(cljs.core._EQ_.call(null,self__.p_QMARK_,cljs.core.string_QMARK_)){
return new cljs.core.Symbol(null,"Str","Str",907970895,null);
} else {
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.pred_name),new cljs.core.Symbol(null,"pred","pred",-727012372,null));

}
}
}
}
});

schema.core.Predicate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p?","p?",468369826,null),new cljs.core.Symbol(null,"pred-name","pred-name",1636854076,null)], null);
});

schema.core.Predicate.cljs$lang$type = true;

schema.core.Predicate.cljs$lang$ctorPrSeq = (function (this__7103__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Predicate");
});

schema.core.Predicate.cljs$lang$ctorPrWriter = (function (this__7103__auto__,writer__7104__auto__){
return cljs.core._write.call(null,writer__7104__auto__,"schema.core/Predicate");
});

schema.core.__GT_Predicate = (function schema$core$__GT_Predicate(p_QMARK_,pred_name){
return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
});

schema.core.map__GT_Predicate = (function schema$core$map__GT_Predicate(G__9448){
return (new schema.core.Predicate(new cljs.core.Keyword(null,"p?","p?",-1172161701).cljs$core$IFn$_invoke$arity$1(G__9448),new cljs.core.Keyword(null,"pred-name","pred-name",-3677451).cljs$core$IFn$_invoke$arity$1(G__9448),null,cljs.core.dissoc.call(null,G__9448,new cljs.core.Keyword(null,"p?","p?",-1172161701),new cljs.core.Keyword(null,"pred-name","pred-name",-3677451)),null));
});

/**
 * A value for which p? returns true (and does not throw).
 * Optional pred-name can be passed for nicer validation errors.
 */
schema.core.pred = (function schema$core$pred(var_args){
var args9454 = [];
var len__7513__auto___9457 = arguments.length;
var i__7514__auto___9458 = (0);
while(true){
if((i__7514__auto___9458 < len__7513__auto___9457)){
args9454.push((arguments[i__7514__auto___9458]));

var G__9459 = (i__7514__auto___9458 + (1));
i__7514__auto___9458 = G__9459;
continue;
} else {
}
break;
}

var G__9456 = args9454.length;
switch (G__9456) {
case 1:
return schema.core.pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema.core.pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9454.length)].join('')));

}
});

schema.core.pred.cljs$core$IFn$_invoke$arity$1 = (function (p_QMARK_){
return schema.core.pred.call(null,p_QMARK_,cljs.core.symbol.call(null,schema.utils.fn_name.call(null,p_QMARK_)));
});

schema.core.pred.cljs$core$IFn$_invoke$arity$2 = (function (p_QMARK_,pred_name){
if(cljs.core.ifn_QMARK_.call(null,p_QMARK_)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Not a function: %s",p_QMARK_)));
}

return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
});

schema.core.pred.cljs$lang$maxFixedArity = 2;
schema.core.protocol_name = (function schema$core$protocol_name(protocol){
return new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,protocol));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Protocol = (function (p,__meta,__extmap,__hash){
this.p = p;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7069__auto__,k__7070__auto__){
var self__ = this;
var this__7069__auto____$1 = this;
return cljs.core._lookup.call(null,this__7069__auto____$1,k__7070__auto__,null);
});

schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7071__auto__,k9464,else__7072__auto__){
var self__ = this;
var this__7071__auto____$1 = this;
var G__9466 = (((k9464 instanceof cljs.core.Keyword))?k9464.fqn:null);
switch (G__9466) {
case "p":
return self__.p;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9464,else__7072__auto__);

}
});

schema.core.Protocol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7083__auto__,writer__7084__auto__,opts__7085__auto__){
var self__ = this;
var this__7083__auto____$1 = this;
var pr_pair__7086__auto__ = ((function (this__7083__auto____$1){
return (function (keyval__7087__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7084__auto__,cljs.core.pr_writer,""," ","",opts__7085__auto__,keyval__7087__auto__);
});})(this__7083__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7084__auto__,pr_pair__7086__auto__,"#schema.core.Protocol{",", ","}",opts__7085__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null))], null),self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IIterable$ = true;

schema.core.Protocol.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9463){
var self__ = this;
var G__9463__$1 = this;
return (new cljs.core.RecordIter((0),G__9463__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Protocol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7067__auto__){
var self__ = this;
var this__7067__auto____$1 = this;
return self__.__meta;
});

schema.core.Protocol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7063__auto__){
var self__ = this;
var this__7063__auto____$1 = this;
return (new schema.core.Protocol(self__.p,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Protocol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7073__auto__){
var self__ = this;
var this__7073__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7064__auto__){
var self__ = this;
var this__7064__auto____$1 = this;
var h__6890__auto__ = self__.__hash;
if(!((h__6890__auto__ == null))){
return h__6890__auto__;
} else {
var h__6890__auto____$1 = cljs.core.hash_imap.call(null,this__7064__auto____$1);
self__.__hash = h__6890__auto____$1;

return h__6890__auto____$1;
}
});

schema.core.Protocol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7065__auto__,other__7066__auto__){
var self__ = this;
var this__7065__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6443__auto__ = other__7066__auto__;
if(cljs.core.truth_(and__6443__auto__)){
var and__6443__auto____$1 = (this__7065__auto____$1.constructor === other__7066__auto__.constructor);
if(and__6443__auto____$1){
return cljs.core.equiv_map.call(null,this__7065__auto____$1,other__7066__auto__);
} else {
return and__6443__auto____$1;
}
} else {
return and__6443__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Protocol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7078__auto__,k__7079__auto__){
var self__ = this;
var this__7078__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p","p",151049309),null], null), null),k__7079__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7078__auto____$1),self__.__meta),k__7079__auto__);
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7079__auto__)),null));
}
});

schema.core.Protocol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7076__auto__,k__7077__auto__,G__9463){
var self__ = this;
var this__7076__auto____$1 = this;
var pred__9467 = cljs.core.keyword_identical_QMARK_;
var expr__9468 = k__7077__auto__;
if(cljs.core.truth_(pred__9467.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__9468))){
return (new schema.core.Protocol(G__9463,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7077__auto__,G__9463),null));
}
});

schema.core.Protocol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7081__auto__){
var self__ = this;
var this__7081__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null))], null),self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7068__auto__,G__9463){
var self__ = this;
var this__7068__auto____$1 = this;
return (new schema.core.Protocol(self__.p,G__9463,self__.__extmap,self__.__hash));
});

schema.core.Protocol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7074__auto__,entry__7075__auto__){
var self__ = this;
var this__7074__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7075__auto__)){
return cljs.core._assoc.call(null,this__7074__auto____$1,cljs.core._nth.call(null,entry__7075__auto__,(0)),cljs.core._nth.call(null,entry__7075__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7074__auto____$1,entry__7075__auto__);
}
});

schema.core.Protocol.prototype.schema$core$Schema$ = true;

schema.core.Protocol.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,((function (this$__$1){
return (function (p1__9461_SHARP_){
return new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,this$__$1)).call(null,p1__9461_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__9462_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__9462_SHARP_),schema.core.protocol_name.call(null,this$__$1)),new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null));
});})(this$__$1))
));
});

schema.core.Protocol.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.protocol_name.call(null,this$__$1)),new cljs.core.Symbol(null,"protocol","protocol",-2001965651,null));
});

schema.core.Protocol.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null);
});

schema.core.Protocol.cljs$lang$type = true;

schema.core.Protocol.cljs$lang$ctorPrSeq = (function (this__7103__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Protocol");
});

schema.core.Protocol.cljs$lang$ctorPrWriter = (function (this__7103__auto__,writer__7104__auto__){
return cljs.core._write.call(null,writer__7104__auto__,"schema.core/Protocol");
});

schema.core.__GT_Protocol = (function schema$core$__GT_Protocol(p){
return (new schema.core.Protocol(p,null,null,null));
});

schema.core.map__GT_Protocol = (function schema$core$map__GT_Protocol(G__9465){
return (new schema.core.Protocol(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__9465),null,cljs.core.dissoc.call(null,G__9465,new cljs.core.Keyword(null,"p","p",151049309)),null));
});

RegExp.prototype.schema$core$Schema$ = true;

RegExp.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,cljs.core.some_fn.call(null,schema.spec.core.precondition.call(null,this$__$1,cljs.core.string_QMARK_,((function (this$__$1){
return (function (p1__8027__8028__auto__){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__8027__8028__auto__),new cljs.core.Symbol(null,"string?","string?",-1129175764,null));
});})(this$__$1))
),schema.spec.core.precondition.call(null,this$__$1,((function (this$__$1){
return (function (p1__9471_SHARP_){
return cljs.core.re_find.call(null,this$__$1,p1__9471_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__9472_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__9472_SHARP_),schema.core.explain.call(null,this$__$1)),new cljs.core.Symbol(null,"re-find","re-find",1143444147,null));
});})(this$__$1))
)));
});

RegExp.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.symbol.call(null,[cljs.core.str("#\""),cljs.core.str([cljs.core.str(this$__$1)].join('').slice((1),(-1))),cljs.core.str("\"")].join(''));
});
/**
 * Satisfied only by String.
 * Is (pred string?) and not js/String in cljs because of keywords.
 */
schema.core.Str = schema.core.pred.call(null,cljs.core.string_QMARK_);
/**
 * Boolean true or false
 */
schema.core.Bool = Boolean;
/**
 * Any number
 */
schema.core.Num = Number;
/**
 * Any integral number
 */
schema.core.Int = schema.core.pred.call(null,cljs.core.integer_QMARK_);
/**
 * A keyword
 */
schema.core.Keyword = schema.core.pred.call(null,cljs.core.keyword_QMARK_);
/**
 * A symbol
 */
schema.core.Symbol = schema.core.pred.call(null,cljs.core.symbol_QMARK_);
/**
 * A regular expression
 */
schema.core.Regex = (function (){
if(typeof schema.core.t_schema$core9475 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {schema.core.Schema}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
schema.core.t_schema$core9475 = (function (meta9476){
this.meta9476 = meta9476;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
schema.core.t_schema$core9475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9477,meta9476__$1){
var self__ = this;
var _9477__$1 = this;
return (new schema.core.t_schema$core9475(meta9476__$1));
});

schema.core.t_schema$core9475.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9477){
var self__ = this;
var _9477__$1 = this;
return self__.meta9476;
});

schema.core.t_schema$core9475.prototype.schema$core$Schema$ = true;

schema.core.t_schema$core9475.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,((function (this$__$1){
return (function (p1__9473_SHARP_){
return (p1__9473_SHARP_ instanceof RegExp);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__9474_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__9474_SHARP_),new cljs.core.Symbol("js","RegExp","js/RegExp",1778210562,null)),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
});})(this$__$1))
));
});

schema.core.t_schema$core9475.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Symbol(null,"Regex","Regex",205914413,null);
});

schema.core.t_schema$core9475.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta9476","meta9476",566265173,null)], null);
});

schema.core.t_schema$core9475.cljs$lang$type = true;

schema.core.t_schema$core9475.cljs$lang$ctorStr = "schema.core/t_schema$core9475";

schema.core.t_schema$core9475.cljs$lang$ctorPrWriter = (function (this__7053__auto__,writer__7054__auto__,opt__7055__auto__){
return cljs.core._write.call(null,writer__7054__auto__,"schema.core/t_schema$core9475");
});

schema.core.__GT_t_schema$core9475 = (function schema$core$__GT_t_schema$core9475(meta9476){
return (new schema.core.t_schema$core9475(meta9476));
});

}

return (new schema.core.t_schema$core9475(cljs.core.PersistentArrayMap.EMPTY));
})()
;
/**
 * The local representation of #inst ...
 */
schema.core.Inst = Date;
/**
 * The local representation of #uuid ...
 */
schema.core.Uuid = cljs.core.UUID;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Maybe = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7069__auto__,k__7070__auto__){
var self__ = this;
var this__7069__auto____$1 = this;
return cljs.core._lookup.call(null,this__7069__auto____$1,k__7070__auto__,null);
});

schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7071__auto__,k9479,else__7072__auto__){
var self__ = this;
var this__7071__auto____$1 = this;
var G__9481 = (((k9479 instanceof cljs.core.Keyword))?k9479.fqn:null);
switch (G__9481) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9479,else__7072__auto__);

}
});

schema.core.Maybe.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7083__auto__,writer__7084__auto__,opts__7085__auto__){
var self__ = this;
var this__7083__auto____$1 = this;
var pr_pair__7086__auto__ = ((function (this__7083__auto____$1){
return (function (keyval__7087__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7084__auto__,cljs.core.pr_writer,""," ","",opts__7085__auto__,keyval__7087__auto__);
});})(this__7083__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7084__auto__,pr_pair__7086__auto__,"#schema.core.Maybe{",", ","}",opts__7085__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IIterable$ = true;

schema.core.Maybe.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9478){
var self__ = this;
var G__9478__$1 = this;
return (new cljs.core.RecordIter((0),G__9478__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Maybe.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7067__auto__){
var self__ = this;
var this__7067__auto____$1 = this;
return self__.__meta;
});

schema.core.Maybe.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7063__auto__){
var self__ = this;
var this__7063__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Maybe.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7073__auto__){
var self__ = this;
var this__7073__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7064__auto__){
var self__ = this;
var this__7064__auto____$1 = this;
var h__6890__auto__ = self__.__hash;
if(!((h__6890__auto__ == null))){
return h__6890__auto__;
} else {
var h__6890__auto____$1 = cljs.core.hash_imap.call(null,this__7064__auto____$1);
self__.__hash = h__6890__auto____$1;

return h__6890__auto____$1;
}
});

schema.core.Maybe.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7065__auto__,other__7066__auto__){
var self__ = this;
var this__7065__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6443__auto__ = other__7066__auto__;
if(cljs.core.truth_(and__6443__auto__)){
var and__6443__auto____$1 = (this__7065__auto____$1.constructor === other__7066__auto__.constructor);
if(and__6443__auto____$1){
return cljs.core.equiv_map.call(null,this__7065__auto____$1,other__7066__auto__);
} else {
return and__6443__auto____$1;
}
} else {
return and__6443__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Maybe.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7078__auto__,k__7079__auto__){
var self__ = this;
var this__7078__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null], null), null),k__7079__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7078__auto____$1),self__.__meta),k__7079__auto__);
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7079__auto__)),null));
}
});

schema.core.Maybe.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7076__auto__,k__7077__auto__,G__9478){
var self__ = this;
var this__7076__auto____$1 = this;
var pred__9482 = cljs.core.keyword_identical_QMARK_;
var expr__9483 = k__7077__auto__;
if(cljs.core.truth_(pred__9482.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__9483))){
return (new schema.core.Maybe(G__9478,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7077__auto__,G__9478),null));
}
});

schema.core.Maybe.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7081__auto__){
var self__ = this;
var this__7081__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7068__auto__,G__9478){
var self__ = this;
var this__7068__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,G__9478,self__.__extmap,self__.__hash));
});

schema.core.Maybe.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7074__auto__,entry__7075__auto__){
var self__ = this;
var this__7074__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7075__auto__)){
return cljs.core._assoc.call(null,this__7074__auto____$1,cljs.core._nth.call(null,entry__7075__auto__,(0)),cljs.core._nth.call(null,entry__7075__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7074__auto____$1,entry__7075__auto__);
}
});

schema.core.Maybe.prototype.schema$core$Schema$ = true;

schema.core.Maybe.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),cljs.core.nil_QMARK_,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema.core.eq.call(null,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema], null)], null));
});

schema.core.Maybe.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,self__.schema)),new cljs.core.Symbol(null,"maybe","maybe",1326133967,null));
});

schema.core.Maybe.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null)], null);
});

schema.core.Maybe.cljs$lang$type = true;

schema.core.Maybe.cljs$lang$ctorPrSeq = (function (this__7103__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Maybe");
});

schema.core.Maybe.cljs$lang$ctorPrWriter = (function (this__7103__auto__,writer__7104__auto__){
return cljs.core._write.call(null,writer__7104__auto__,"schema.core/Maybe");
});

schema.core.__GT_Maybe = (function schema$core$__GT_Maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

schema.core.map__GT_Maybe = (function schema$core$map__GT_Maybe(G__9480){
return (new schema.core.Maybe(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__9480),null,cljs.core.dissoc.call(null,G__9480,new cljs.core.Keyword(null,"schema","schema",-1582001791)),null));
});

/**
 * A value that must either be nil or satisfy schema
 */
schema.core.maybe = (function schema$core$maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.NamedSchema = (function (schema,name,__meta,__extmap,__hash){
this.schema = schema;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7069__auto__,k__7070__auto__){
var self__ = this;
var this__7069__auto____$1 = this;
return cljs.core._lookup.call(null,this__7069__auto____$1,k__7070__auto__,null);
});

schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7071__auto__,k9488,else__7072__auto__){
var self__ = this;
var this__7071__auto____$1 = this;
var G__9490 = (((k9488 instanceof cljs.core.Keyword))?k9488.fqn:null);
switch (G__9490) {
case "schema":
return self__.schema;

break;
case "name":
return self__.name;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9488,else__7072__auto__);

}
});

schema.core.NamedSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7083__auto__,writer__7084__auto__,opts__7085__auto__){
var self__ = this;
var this__7083__auto____$1 = this;
var pr_pair__7086__auto__ = ((function (this__7083__auto____$1){
return (function (keyval__7087__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7084__auto__,cljs.core.pr_writer,""," ","",opts__7085__auto__,keyval__7087__auto__);
});})(this__7083__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7084__auto__,pr_pair__7086__auto__,"#schema.core.NamedSchema{",", ","}",opts__7085__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IIterable$ = true;

schema.core.NamedSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9487){
var self__ = this;
var G__9487__$1 = this;
return (new cljs.core.RecordIter((0),G__9487__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"name","name",1843675177)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.NamedSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7067__auto__){
var self__ = this;
var this__7067__auto____$1 = this;
return self__.__meta;
});

schema.core.NamedSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7063__auto__){
var self__ = this;
var this__7063__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.NamedSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7073__auto__){
var self__ = this;
var this__7073__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7064__auto__){
var self__ = this;
var this__7064__auto____$1 = this;
var h__6890__auto__ = self__.__hash;
if(!((h__6890__auto__ == null))){
return h__6890__auto__;
} else {
var h__6890__auto____$1 = cljs.core.hash_imap.call(null,this__7064__auto____$1);
self__.__hash = h__6890__auto____$1;

return h__6890__auto____$1;
}
});

schema.core.NamedSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7065__auto__,other__7066__auto__){
var self__ = this;
var this__7065__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6443__auto__ = other__7066__auto__;
if(cljs.core.truth_(and__6443__auto__)){
var and__6443__auto____$1 = (this__7065__auto____$1.constructor === other__7066__auto__.constructor);
if(and__6443__auto____$1){
return cljs.core.equiv_map.call(null,this__7065__auto____$1,other__7066__auto__);
} else {
return and__6443__auto____$1;
}
} else {
return and__6443__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.NamedSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7078__auto__,k__7079__auto__){
var self__ = this;
var this__7078__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__7079__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7078__auto____$1),self__.__meta),k__7079__auto__);
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7079__auto__)),null));
}
});

schema.core.NamedSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7076__auto__,k__7077__auto__,G__9487){
var self__ = this;
var this__7076__auto____$1 = this;
var pred__9491 = cljs.core.keyword_identical_QMARK_;
var expr__9492 = k__7077__auto__;
if(cljs.core.truth_(pred__9491.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__9492))){
return (new schema.core.NamedSchema(G__9487,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9491.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__9492))){
return (new schema.core.NamedSchema(self__.schema,G__9487,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7077__auto__,G__9487),null));
}
}
});

schema.core.NamedSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7081__auto__){
var self__ = this;
var this__7081__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7068__auto__,G__9487){
var self__ = this;
var this__7068__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,G__9487,self__.__extmap,self__.__hash));
});

schema.core.NamedSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7074__auto__,entry__7075__auto__){
var self__ = this;
var this__7074__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7075__auto__)){
return cljs.core._assoc.call(null,this__7074__auto____$1,cljs.core._nth.call(null,entry__7075__auto__,(0)),cljs.core._nth.call(null,entry__7075__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7074__auto____$1,entry__7075__auto__);
}
});

schema.core.NamedSchema.prototype.schema$core$Schema$ = true;

schema.core.NamedSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema,new cljs.core.Keyword(null,"wrap-error","wrap-error",536732809),((function (this$__$1){
return (function (p1__9486_SHARP_){
return schema.utils.__GT_NamedError.call(null,self__.name,p1__9486_SHARP_);
});})(this$__$1))
], null)], null));
});

schema.core.NamedSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.name),schema.core.explain.call(null,self__.schema)),new cljs.core.Symbol(null,"named","named",1218138048,null));
});

schema.core.NamedSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"name","name",-810760592,null)], null);
});

schema.core.NamedSchema.cljs$lang$type = true;

schema.core.NamedSchema.cljs$lang$ctorPrSeq = (function (this__7103__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/NamedSchema");
});

schema.core.NamedSchema.cljs$lang$ctorPrWriter = (function (this__7103__auto__,writer__7104__auto__){
return cljs.core._write.call(null,writer__7104__auto__,"schema.core/NamedSchema");
});

schema.core.__GT_NamedSchema = (function schema$core$__GT_NamedSchema(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

schema.core.map__GT_NamedSchema = (function schema$core$map__GT_NamedSchema(G__9489){
return (new schema.core.NamedSchema(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__9489),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__9489),null,cljs.core.dissoc.call(null,G__9489,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"name","name",1843675177)),null));
});

/**
 * A value that must satisfy schema, and has a name for documentation purposes.
 */
schema.core.named = (function schema$core$named(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Either = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7069__auto__,k__7070__auto__){
var self__ = this;
var this__7069__auto____$1 = this;
return cljs.core._lookup.call(null,this__7069__auto____$1,k__7070__auto__,null);
});

schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7071__auto__,k9497,else__7072__auto__){
var self__ = this;
var this__7071__auto____$1 = this;
var G__9499 = (((k9497 instanceof cljs.core.Keyword))?k9497.fqn:null);
switch (G__9499) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9497,else__7072__auto__);

}
});

schema.core.Either.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7083__auto__,writer__7084__auto__,opts__7085__auto__){
var self__ = this;
var this__7083__auto____$1 = this;
var pr_pair__7086__auto__ = ((function (this__7083__auto____$1){
return (function (keyval__7087__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7084__auto__,cljs.core.pr_writer,""," ","",opts__7085__auto__,keyval__7087__auto__);
});})(this__7083__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7084__auto__,pr_pair__7086__auto__,"#schema.core.Either{",", ","}",opts__7085__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IIterable$ = true;

schema.core.Either.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9496){
var self__ = this;
var G__9496__$1 = this;
return (new cljs.core.RecordIter((0),G__9496__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schemas","schemas",575070579)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Either.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7067__auto__){
var self__ = this;
var this__7067__auto____$1 = this;
return self__.__meta;
});

schema.core.Either.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7063__auto__){
var self__ = this;
var this__7063__auto____$1 = this;
return (new schema.core.Either(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Either.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7073__auto__){
var self__ = this;
var this__7073__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7064__auto__){
var self__ = this;
var this__7064__auto____$1 = this;
var h__6890__auto__ = self__.__hash;
if(!((h__6890__auto__ == null))){
return h__6890__auto__;
} else {
var h__6890__auto____$1 = cljs.core.hash_imap.call(null,this__7064__auto____$1);
self__.__hash = h__6890__auto____$1;

return h__6890__auto____$1;
}
});

schema.core.Either.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7065__auto__,other__7066__auto__){
var self__ = this;
var this__7065__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6443__auto__ = other__7066__auto__;
if(cljs.core.truth_(and__6443__auto__)){
var and__6443__auto____$1 = (this__7065__auto____$1.constructor === other__7066__auto__.constructor);
if(and__6443__auto____$1){
return cljs.core.equiv_map.call(null,this__7065__auto____$1,other__7066__auto__);
} else {
return and__6443__auto____$1;
}
} else {
return and__6443__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Either.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7078__auto__,k__7079__auto__){
var self__ = this;
var this__7078__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schemas","schemas",575070579),null], null), null),k__7079__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7078__auto____$1),self__.__meta),k__7079__auto__);
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7079__auto__)),null));
}
});

schema.core.Either.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7076__auto__,k__7077__auto__,G__9496){
var self__ = this;
var this__7076__auto____$1 = this;
var pred__9500 = cljs.core.keyword_identical_QMARK_;
var expr__9501 = k__7077__auto__;
if(cljs.core.truth_(pred__9500.call(null,new cljs.core.Keyword(null,"schemas","schemas",575070579),expr__9501))){
return (new schema.core.Either(G__9496,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7077__auto__,G__9496),null));
}
});

schema.core.Either.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7081__auto__){
var self__ = this;
var this__7081__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7068__auto__,G__9496){
var self__ = this;
var this__7068__auto____$1 = this;
return (new schema.core.Either(self__.schemas,G__9496,self__.__extmap,self__.__hash));
});

schema.core.Either.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7074__auto__,entry__7075__auto__){
var self__ = this;
var this__7074__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7075__auto__)){
return cljs.core._assoc.call(null,this__7074__auto____$1,cljs.core._nth.call(null,entry__7075__auto__,(0)),cljs.core._nth.call(null,entry__7075__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7074__auto____$1,entry__7075__auto__);
}
});

schema.core.Either.prototype.schema$core$Schema$ = true;

schema.core.Either.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__7227__auto__ = ((function (this$__$1){
return (function schema$core$iter__9503(s__9504){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__9504__$1 = s__9504;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__9504__$1);
if(temp__4425__auto__){
var s__9504__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9504__$2)){
var c__7225__auto__ = cljs.core.chunk_first.call(null,s__9504__$2);
var size__7226__auto__ = cljs.core.count.call(null,c__7225__auto__);
var b__9506 = cljs.core.chunk_buffer.call(null,size__7226__auto__);
if((function (){var i__9505 = (0);
while(true){
if((i__9505 < size__7226__auto__)){
var s = cljs.core._nth.call(null,c__7225__auto__,i__9505);
cljs.core.chunk_append.call(null,b__9506,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),cljs.core.complement.call(null,schema.core.checker.call(null,s)),new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null));

var G__9508 = (i__9505 + (1));
i__9505 = G__9508;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9506),schema$core$iter__9503.call(null,cljs.core.chunk_rest.call(null,s__9504__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9506),null);
}
} else {
var s = cljs.core.first.call(null,s__9504__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),cljs.core.complement.call(null,schema.core.checker.call(null,s)),new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null),schema$core$iter__9503.call(null,cljs.core.rest.call(null,s__9504__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__7227__auto__.call(null,self__.schemas);
})(),((function (this$__$1){
return (function (p1__9495_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__9495_SHARP_),new cljs.core.Symbol(null,"some-matching-either-clause?","some-matching-either-clause?",-1443305015,null));
});})(this$__$1))
);
});

schema.core.Either.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol(null,"either","either",-2144373018,null),cljs.core.map.call(null,schema.core.explain,self__.schemas));
});

schema.core.Either.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null)], null);
});

schema.core.Either.cljs$lang$type = true;

schema.core.Either.cljs$lang$ctorPrSeq = (function (this__7103__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Either");
});

schema.core.Either.cljs$lang$ctorPrWriter = (function (this__7103__auto__,writer__7104__auto__){
return cljs.core._write.call(null,writer__7104__auto__,"schema.core/Either");
});

schema.core.__GT_Either = (function schema$core$__GT_Either(schemas){
return (new schema.core.Either(schemas,null,null,null));
});

schema.core.map__GT_Either = (function schema$core$map__GT_Either(G__9498){
return (new schema.core.Either(new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(G__9498),null,cljs.core.dissoc.call(null,G__9498,new cljs.core.Keyword(null,"schemas","schemas",575070579)),null));
});

/**
 * A value that must satisfy at least one schema in schemas.
 * Note that `either` does not work properly with coercion
 * 
 * DEPRECATED: prefer `conditional` or `cond-pre`
 * 
 * WARNING: either does not work with coercion.  It is also slow and gives
 * bad error messages.  Please consider using `conditional` and friends
 * instead; they are more efficient, provide better error messages,
 * and work with coercion.
 */
schema.core.either = (function schema$core$either(var_args){
var args__7520__auto__ = [];
var len__7513__auto___9510 = arguments.length;
var i__7514__auto___9511 = (0);
while(true){
if((i__7514__auto___9511 < len__7513__auto___9510)){
args__7520__auto__.push((arguments[i__7514__auto___9511]));

var G__9512 = (i__7514__auto___9511 + (1));
i__7514__auto___9511 = G__9512;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((0) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((0)),(0))):null);
return schema.core.either.cljs$core$IFn$_invoke$arity$variadic(argseq__7521__auto__);
});

schema.core.either.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.Either(schemas,null,null,null));
});

schema.core.either.cljs$lang$maxFixedArity = (0);

schema.core.either.cljs$lang$applyTo = (function (seq9509){
return schema.core.either.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9509));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.ConditionalSchema = (function (preds_and_schemas,error_symbol,__meta,__extmap,__hash){
this.preds_and_schemas = preds_and_schemas;
this.error_symbol = error_symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7069__auto__,k__7070__auto__){
var self__ = this;
var this__7069__auto____$1 = this;
return cljs.core._lookup.call(null,this__7069__auto____$1,k__7070__auto__,null);
});

schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7071__auto__,k9515,else__7072__auto__){
var self__ = this;
var this__7071__auto____$1 = this;
var G__9517 = (((k9515 instanceof cljs.core.Keyword))?k9515.fqn:null);
switch (G__9517) {
case "preds-and-schemas":
return self__.preds_and_schemas;

break;
case "error-symbol":
return self__.error_symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9515,else__7072__auto__);

}
});

schema.core.ConditionalSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7083__auto__,writer__7084__auto__,opts__7085__auto__){
var self__ = this;
var this__7083__auto____$1 = this;
var pr_pair__7086__auto__ = ((function (this__7083__auto____$1){
return (function (keyval__7087__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7084__auto__,cljs.core.pr_writer,""," ","",opts__7085__auto__,keyval__7087__auto__);
});})(this__7083__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7084__auto__,pr_pair__7086__auto__,"#schema.core.ConditionalSchema{",", ","}",opts__7085__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),self__.preds_and_schemas],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428),self__.error_symbol],null))], null),self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IIterable$ = true;

schema.core.ConditionalSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9514){
var self__ = this;
var G__9514__$1 = this;
return (new cljs.core.RecordIter((0),G__9514__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.ConditionalSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7067__auto__){
var self__ = this;
var this__7067__auto____$1 = this;
return self__.__meta;
});

schema.core.ConditionalSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7063__auto__){
var self__ = this;
var this__7063__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.ConditionalSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7073__auto__){
var self__ = this;
var this__7073__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7064__auto__){
var self__ = this;
var this__7064__auto____$1 = this;
var h__6890__auto__ = self__.__hash;
if(!((h__6890__auto__ == null))){
return h__6890__auto__;
} else {
var h__6890__auto____$1 = cljs.core.hash_imap.call(null,this__7064__auto____$1);
self__.__hash = h__6890__auto____$1;

return h__6890__auto____$1;
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7065__auto__,other__7066__auto__){
var self__ = this;
var this__7065__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6443__auto__ = other__7066__auto__;
if(cljs.core.truth_(and__6443__auto__)){
var and__6443__auto____$1 = (this__7065__auto____$1.constructor === other__7066__auto__.constructor);
if(and__6443__auto____$1){
return cljs.core.equiv_map.call(null,this__7065__auto____$1,other__7066__auto__);
} else {
return and__6443__auto____$1;
}
} else {
return and__6443__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7078__auto__,k__7079__auto__){
var self__ = this;
var this__7078__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),null,new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428),null], null), null),k__7079__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7078__auto____$1),self__.__meta),k__7079__auto__);
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7079__auto__)),null));
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7076__auto__,k__7077__auto__,G__9514){
var self__ = this;
var this__7076__auto____$1 = this;
var pred__9518 = cljs.core.keyword_identical_QMARK_;
var expr__9519 = k__7077__auto__;
if(cljs.core.truth_(pred__9518.call(null,new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),expr__9519))){
return (new schema.core.ConditionalSchema(G__9514,self__.error_symbol,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9518.call(null,new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428),expr__9519))){
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,G__9514,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7077__auto__,G__9514),null));
}
}
});

schema.core.ConditionalSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7081__auto__){
var self__ = this;
var this__7081__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),self__.preds_and_schemas],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428),self__.error_symbol],null))], null),self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7068__auto__,G__9514){
var self__ = this;
var this__7068__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,G__9514,self__.__extmap,self__.__hash));
});

schema.core.ConditionalSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7074__auto__,entry__7075__auto__){
var self__ = this;
var this__7074__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7075__auto__)){
return cljs.core._assoc.call(null,this__7074__auto____$1,cljs.core._nth.call(null,entry__7075__auto__,(0)),cljs.core._nth.call(null,entry__7075__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7074__auto____$1,entry__7075__auto__);
}
});

schema.core.ConditionalSchema.prototype.schema$core$Schema$ = true;

schema.core.ConditionalSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__7227__auto__ = ((function (this$__$1){
return (function schema$core$iter__9521(s__9522){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__9522__$1 = s__9522;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__9522__$1);
if(temp__4425__auto__){
var s__9522__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9522__$2)){
var c__7225__auto__ = cljs.core.chunk_first.call(null,s__9522__$2);
var size__7226__auto__ = cljs.core.count.call(null,c__7225__auto__);
var b__9524 = cljs.core.chunk_buffer.call(null,size__7226__auto__);
if((function (){var i__9523 = (0);
while(true){
if((i__9523 < size__7226__auto__)){
var vec__9527 = cljs.core._nth.call(null,c__7225__auto__,i__9523);
var p = cljs.core.nth.call(null,vec__9527,(0),null);
var s = cljs.core.nth.call(null,vec__9527,(1),null);
cljs.core.chunk_append.call(null,b__9524,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),p,new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null));

var G__9532 = (i__9523 + (1));
i__9523 = G__9532;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9524),schema$core$iter__9521.call(null,cljs.core.chunk_rest.call(null,s__9522__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9524),null);
}
} else {
var vec__9528 = cljs.core.first.call(null,s__9522__$2);
var p = cljs.core.nth.call(null,vec__9528,(0),null);
var s = cljs.core.nth.call(null,vec__9528,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),p,new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null),schema$core$iter__9521.call(null,cljs.core.rest.call(null,s__9522__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__7227__auto__.call(null,self__.preds_and_schemas);
})(),((function (this$__$1){
return (function (p1__9513_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__9513_SHARP_),(function (){var or__6455__auto__ = self__.error_symbol;
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,self__.preds_and_schemas))){
return cljs.core.symbol.call(null,schema.utils.fn_name.call(null,cljs.core.ffirst.call(null,self__.preds_and_schemas)));
} else {
return new cljs.core.Symbol(null,"some-matching-condition?","some-matching-condition?",1512398506,null);
}
}
})());
});})(this$__$1))
);
});

schema.core.ConditionalSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol(null,"conditional","conditional",-1212542970,null),cljs.core.concat.call(null,cljs.core.mapcat.call(null,((function (this$__$1){
return (function (p__9529){
var vec__9530 = p__9529;
var pred = cljs.core.nth.call(null,vec__9530,(0),null);
var schema__$1 = cljs.core.nth.call(null,vec__9530,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,schema.utils.fn_name.call(null,pred)),schema.core.explain.call(null,schema__$1)], null);
});})(this$__$1))
,self__.preds_and_schemas),(cljs.core.truth_(self__.error_symbol)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.error_symbol], null):null)));
});

schema.core.ConditionalSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"preds-and-schemas","preds-and-schemas",333765172,null),new cljs.core.Symbol(null,"error-symbol","error-symbol",817051099,null)], null);
});

schema.core.ConditionalSchema.cljs$lang$type = true;

schema.core.ConditionalSchema.cljs$lang$ctorPrSeq = (function (this__7103__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/ConditionalSchema");
});

schema.core.ConditionalSchema.cljs$lang$ctorPrWriter = (function (this__7103__auto__,writer__7104__auto__){
return cljs.core._write.call(null,writer__7104__auto__,"schema.core/ConditionalSchema");
});

schema.core.__GT_ConditionalSchema = (function schema$core$__GT_ConditionalSchema(preds_and_schemas,error_symbol){
return (new schema.core.ConditionalSchema(preds_and_schemas,error_symbol,null,null,null));
});

schema.core.map__GT_ConditionalSchema = (function schema$core$map__GT_ConditionalSchema(G__9516){
return (new schema.core.ConditionalSchema(new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355).cljs$core$IFn$_invoke$arity$1(G__9516),new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428).cljs$core$IFn$_invoke$arity$1(G__9516),null,cljs.core.dissoc.call(null,G__9516,new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428)),null));
});

/**
 * Define a conditional schema.  Takes args like cond,
 * (conditional pred1 schema1 pred2 schema2 ...),
 * and checks the first schemaX where predX (an ordinary Clojure function
 * that returns true or false) returns true on the value.
 * Unlike cond, throws if the value does not match any condition.
 * :else may be used as a final condition in the place of (constantly true).
 * More efficient than either, since only one schema must be checked.
 * An optional final argument can be passed, a symbol to appear in
 * error messages when none of the conditions match.
 */
schema.core.conditional = (function schema$core$conditional(var_args){
var args__7520__auto__ = [];
var len__7513__auto___9542 = arguments.length;
var i__7514__auto___9543 = (0);
while(true){
if((i__7514__auto___9543 < len__7513__auto___9542)){
args__7520__auto__.push((arguments[i__7514__auto___9543]));

var G__9544 = (i__7514__auto___9543 + (1));
i__7514__auto___9543 = G__9544;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((0) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((0)),(0))):null);
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(argseq__7521__auto__);
});

schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic = (function (preds_and_schemas){
if((cljs.core.seq.call(null,preds_and_schemas)) && ((cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,preds_and_schemas))) || ((cljs.core.last.call(null,preds_and_schemas) instanceof cljs.core.Symbol)))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Expected even, nonzero number of args (with optional trailing symbol); got %s",cljs.core.count.call(null,preds_and_schemas))));
}

return (new schema.core.ConditionalSchema(cljs.core.vec.call(null,(function (){var iter__7227__auto__ = (function schema$core$iter__9534(s__9535){
return (new cljs.core.LazySeq(null,(function (){
var s__9535__$1 = s__9535;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__9535__$1);
if(temp__4425__auto__){
var s__9535__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9535__$2)){
var c__7225__auto__ = cljs.core.chunk_first.call(null,s__9535__$2);
var size__7226__auto__ = cljs.core.count.call(null,c__7225__auto__);
var b__9537 = cljs.core.chunk_buffer.call(null,size__7226__auto__);
if((function (){var i__9536 = (0);
while(true){
if((i__9536 < size__7226__auto__)){
var vec__9540 = cljs.core._nth.call(null,c__7225__auto__,i__9536);
var pred = cljs.core.nth.call(null,vec__9540,(0),null);
var schema__$1 = cljs.core.nth.call(null,vec__9540,(1),null);
cljs.core.chunk_append.call(null,b__9537,(function (){
if(cljs.core.ifn_QMARK_.call(null,pred)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,[cljs.core.str("Conditional predicate "),cljs.core.str(pred),cljs.core.str(" must be a function")].join(''))));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,pred,new cljs.core.Keyword(null,"else","else",-1508377146)))?cljs.core.constantly.call(null,true):pred),schema__$1], null);
})()
);

var G__9545 = (i__9536 + (1));
i__9536 = G__9545;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9537),schema$core$iter__9534.call(null,cljs.core.chunk_rest.call(null,s__9535__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9537),null);
}
} else {
var vec__9541 = cljs.core.first.call(null,s__9535__$2);
var pred = cljs.core.nth.call(null,vec__9541,(0),null);
var schema__$1 = cljs.core.nth.call(null,vec__9541,(1),null);
return cljs.core.cons.call(null,(function (){
if(cljs.core.ifn_QMARK_.call(null,pred)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,[cljs.core.str("Conditional predicate "),cljs.core.str(pred),cljs.core.str(" must be a function")].join(''))));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,pred,new cljs.core.Keyword(null,"else","else",-1508377146)))?cljs.core.constantly.call(null,true):pred),schema__$1], null);
})()
,schema$core$iter__9534.call(null,cljs.core.rest.call(null,s__9535__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7227__auto__.call(null,cljs.core.partition.call(null,(2),preds_and_schemas));
})()),((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,preds_and_schemas)))?cljs.core.last.call(null,preds_and_schemas):null),null,null,null));
});

schema.core.conditional.cljs$lang$maxFixedArity = (0);

schema.core.conditional.cljs$lang$applyTo = (function (seq9533){
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9533));
});

/**
 * @interface
 */
schema.core.HasPrecondition = function(){};

/**
 * Return a predicate representing the Precondition for this schema:
 *   the predicate returns true if the precondition is satisfied.
 *   (See spec.core for more details)
 */
schema.core.precondition = (function schema$core$precondition(this$){
if((!((this$ == null))) && (!((this$.schema$core$HasPrecondition$precondition$arity$1 == null)))){
return this$.schema$core$HasPrecondition$precondition$arity$1(this$);
} else {
var x__7110__auto__ = (((this$ == null))?null:this$);
var m__7111__auto__ = (schema.core.precondition[goog.typeOf(x__7110__auto__)]);
if(!((m__7111__auto__ == null))){
return m__7111__auto__.call(null,this$);
} else {
var m__7111__auto____$1 = (schema.core.precondition["_"]);
if(!((m__7111__auto____$1 == null))){
return m__7111__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"HasPrecondition.precondition",this$);
}
}
}
});

schema.spec.leaf.LeafSpec.prototype.schema$core$HasPrecondition$ = true;

schema.spec.leaf.LeafSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.complement.call(null,this$__$1.pre);
});

schema.spec.variant.VariantSpec.prototype.schema$core$HasPrecondition$ = true;

schema.spec.variant.VariantSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.every_pred.call(null,cljs.core.complement.call(null,this$__$1.pre),cljs.core.apply.call(null,cljs.core.some_fn,(function (){var iter__7227__auto__ = ((function (this$__$1){
return (function schema$core$iter__9546(s__9547){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__9547__$1 = s__9547;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__9547__$1);
if(temp__4425__auto__){
var s__9547__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9547__$2)){
var c__7225__auto__ = cljs.core.chunk_first.call(null,s__9547__$2);
var size__7226__auto__ = cljs.core.count.call(null,c__7225__auto__);
var b__9549 = cljs.core.chunk_buffer.call(null,size__7226__auto__);
if((function (){var i__9548 = (0);
while(true){
if((i__9548 < size__7226__auto__)){
var map__9554 = cljs.core._nth.call(null,c__7225__auto__,i__9548);
var map__9554__$1 = ((((!((map__9554 == null)))?((((map__9554.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9554.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9554):map__9554);
var guard = cljs.core.get.call(null,map__9554__$1,new cljs.core.Keyword(null,"guard","guard",-873147811));
var schema__$1 = cljs.core.get.call(null,map__9554__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
cljs.core.chunk_append.call(null,b__9549,(cljs.core.truth_(guard)?cljs.core.every_pred.call(null,guard,schema.core.precondition.call(null,schema.core.spec.call(null,schema__$1))):schema.core.precondition.call(null,schema.core.spec.call(null,schema__$1))));

var G__9558 = (i__9548 + (1));
i__9548 = G__9558;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9549),schema$core$iter__9546.call(null,cljs.core.chunk_rest.call(null,s__9547__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9549),null);
}
} else {
var map__9556 = cljs.core.first.call(null,s__9547__$2);
var map__9556__$1 = ((((!((map__9556 == null)))?((((map__9556.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9556.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9556):map__9556);
var guard = cljs.core.get.call(null,map__9556__$1,new cljs.core.Keyword(null,"guard","guard",-873147811));
var schema__$1 = cljs.core.get.call(null,map__9556__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
return cljs.core.cons.call(null,(cljs.core.truth_(guard)?cljs.core.every_pred.call(null,guard,schema.core.precondition.call(null,schema.core.spec.call(null,schema__$1))):schema.core.precondition.call(null,schema.core.spec.call(null,schema__$1))),schema$core$iter__9546.call(null,cljs.core.rest.call(null,s__9547__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__7227__auto__.call(null,this$__$1.options);
})()));
});

schema.spec.collection.CollectionSpec.prototype.schema$core$HasPrecondition$ = true;

schema.spec.collection.CollectionSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.complement.call(null,this$__$1.pre);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.CondPre = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.CondPre.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7069__auto__,k__7070__auto__){
var self__ = this;
var this__7069__auto____$1 = this;
return cljs.core._lookup.call(null,this__7069__auto____$1,k__7070__auto__,null);
});

schema.core.CondPre.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7071__auto__,k9561,else__7072__auto__){
var self__ = this;
var this__7071__auto____$1 = this;
var G__9563 = (((k9561 instanceof cljs.core.Keyword))?k9561.fqn:null);
switch (G__9563) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9561,else__7072__auto__);

}
});

schema.core.CondPre.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7083__auto__,writer__7084__auto__,opts__7085__auto__){
var self__ = this;
var this__7083__auto____$1 = this;
var pr_pair__7086__auto__ = ((function (this__7083__auto____$1){
return (function (keyval__7087__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7084__auto__,cljs.core.pr_writer,""," ","",opts__7085__auto__,keyval__7087__auto__);
});})(this__7083__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7084__auto__,pr_pair__7086__auto__,"#schema.core.CondPre{",", ","}",opts__7085__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});

schema.core.CondPre.prototype.cljs$core$IIterable$ = true;

schema.core.CondPre.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9560){
var self__ = this;
var G__9560__$1 = this;
return (new cljs.core.RecordIter((0),G__9560__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schemas","schemas",575070579)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.CondPre.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7067__auto__){
var self__ = this;
var this__7067__auto____$1 = this;
return self__.__meta;
});

schema.core.CondPre.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7063__auto__){
var self__ = this;
var this__7063__auto____$1 = this;
return (new schema.core.CondPre(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.CondPre.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7073__auto__){
var self__ = this;
var this__7073__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.CondPre.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7064__auto__){
var self__ = this;
var this__7064__auto____$1 = this;
var h__6890__auto__ = self__.__hash;
if(!((h__6890__auto__ == null))){
return h__6890__auto__;
} else {
var h__6890__auto____$1 = cljs.core.hash_imap.call(null,this__7064__auto____$1);
self__.__hash = h__6890__auto____$1;

return h__6890__auto____$1;
}
});

schema.core.CondPre.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7065__auto__,other__7066__auto__){
var self__ = this;
var this__7065__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6443__auto__ = other__7066__auto__;
if(cljs.core.truth_(and__6443__auto__)){
var and__6443__auto____$1 = (this__7065__auto____$1.constructor === other__7066__auto__.constructor);
if(and__6443__auto____$1){
return cljs.core.equiv_map.call(null,this__7065__auto____$1,other__7066__auto__);
} else {
return and__6443__auto____$1;
}
} else {
return and__6443__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.CondPre.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7078__auto__,k__7079__auto__){
var self__ = this;
var this__7078__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schemas","schemas",575070579),null], null), null),k__7079__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7078__auto____$1),self__.__meta),k__7079__auto__);
} else {
return (new schema.core.CondPre(self__.schemas,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7079__auto__)),null));
}
});

schema.core.CondPre.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7076__auto__,k__7077__auto__,G__9560){
var self__ = this;
var this__7076__auto____$1 = this;
var pred__9564 = cljs.core.keyword_identical_QMARK_;
var expr__9565 = k__7077__auto__;
if(cljs.core.truth_(pred__9564.call(null,new cljs.core.Keyword(null,"schemas","schemas",575070579),expr__9565))){
return (new schema.core.CondPre(G__9560,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.CondPre(self__.schemas,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7077__auto__,G__9560),null));
}
});

schema.core.CondPre.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7081__auto__){
var self__ = this;
var this__7081__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});

schema.core.CondPre.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7068__auto__,G__9560){
var self__ = this;
var this__7068__auto____$1 = this;
return (new schema.core.CondPre(self__.schemas,G__9560,self__.__extmap,self__.__hash));
});

schema.core.CondPre.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7074__auto__,entry__7075__auto__){
var self__ = this;
var this__7074__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7075__auto__)){
return cljs.core._assoc.call(null,this__7074__auto____$1,cljs.core._nth.call(null,entry__7075__auto__,(0)),cljs.core._nth.call(null,entry__7075__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7074__auto____$1,entry__7075__auto__);
}
});

schema.core.CondPre.prototype.schema$core$Schema$ = true;

schema.core.CondPre.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__7227__auto__ = ((function (this$__$1){
return (function schema$core$iter__9567(s__9568){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__9568__$1 = s__9568;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__9568__$1);
if(temp__4425__auto__){
var s__9568__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9568__$2)){
var c__7225__auto__ = cljs.core.chunk_first.call(null,s__9568__$2);
var size__7226__auto__ = cljs.core.count.call(null,c__7225__auto__);
var b__9570 = cljs.core.chunk_buffer.call(null,size__7226__auto__);
if((function (){var i__9569 = (0);
while(true){
if((i__9569 < size__7226__auto__)){
var s = cljs.core._nth.call(null,c__7225__auto__,i__9569);
cljs.core.chunk_append.call(null,b__9570,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),schema.core.precondition.call(null,schema.core.spec.call(null,s)),new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null));

var G__9572 = (i__9569 + (1));
i__9569 = G__9572;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9570),schema$core$iter__9567.call(null,cljs.core.chunk_rest.call(null,s__9568__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9570),null);
}
} else {
var s = cljs.core.first.call(null,s__9568__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),schema.core.precondition.call(null,schema.core.spec.call(null,s)),new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null),schema$core$iter__9567.call(null,cljs.core.rest.call(null,s__9568__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__7227__auto__.call(null,self__.schemas);
})(),((function (this$__$1){
return (function (p1__9559_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__9559_SHARP_),new cljs.core.Symbol(null,"matches-some-precondition?","matches-some-precondition?",2123072832,null));
});})(this$__$1))
);
});

schema.core.CondPre.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol(null,"cond-pre","cond-pre",-923707731,null),cljs.core.map.call(null,schema.core.explain,self__.schemas));
});

schema.core.CondPre.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null)], null);
});

schema.core.CondPre.cljs$lang$type = true;

schema.core.CondPre.cljs$lang$ctorPrSeq = (function (this__7103__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/CondPre");
});

schema.core.CondPre.cljs$lang$ctorPrWriter = (function (this__7103__auto__,writer__7104__auto__){
return cljs.core._write.call(null,writer__7104__auto__,"schema.core/CondPre");
});

schema.core.__GT_CondPre = (function schema$core$__GT_CondPre(schemas){
return (new schema.core.CondPre(schemas,null,null,null));
});

schema.core.map__GT_CondPre = (function schema$core$map__GT_CondPre(G__9562){
return (new schema.core.CondPre(new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(G__9562),null,cljs.core.dissoc.call(null,G__9562,new cljs.core.Keyword(null,"schemas","schemas",575070579)),null));
});

/**
 * A replacement for `either` that constructs a conditional schema
 * based on the schema spec preconditions of the component schemas.
 * 
 * Given a datum, the preconditions for each schema (which typically
 * check just the outermost class) are tested against the datum in turn.
 * The first schema whose precondition matches is greedily selected,
 * and the datum is validated against that schema.  Unlike `either`,
 * a validation failure is final (and there is no backtracking to try
 * other schemas that might match).
 * 
 * Thus, `cond-pre` is only suitable for schemas with mutually exclusive
 * preconditions (e.g., s/Int and s/Str).  If this doesn't hold
 * (e.g. {:a s/Int} and {:b s/Str}), you must use `conditional` instead
 * and provide an explicit condition for distinguishing the cases.
 * 
 * EXPERIMENTAL
 */
schema.core.cond_pre = (function schema$core$cond_pre(var_args){
var args__7520__auto__ = [];
var len__7513__auto___9574 = arguments.length;
var i__7514__auto___9575 = (0);
while(true){
if((i__7514__auto___9575 < len__7513__auto___9574)){
args__7520__auto__.push((arguments[i__7514__auto___9575]));

var G__9576 = (i__7514__auto___9575 + (1));
i__7514__auto___9575 = G__9576;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((0) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((0)),(0))):null);
return schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic(argseq__7521__auto__);
});

schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.CondPre(schemas,null,null,null));
});

schema.core.cond_pre.cljs$lang$maxFixedArity = (0);

schema.core.cond_pre.cljs$lang$applyTo = (function (seq9573){
return schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9573));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Constrained = (function (schema,postcondition,post_name,__meta,__extmap,__hash){
this.schema = schema;
this.postcondition = postcondition;
this.post_name = post_name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Constrained.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7069__auto__,k__7070__auto__){
var self__ = this;
var this__7069__auto____$1 = this;
return cljs.core._lookup.call(null,this__7069__auto____$1,k__7070__auto__,null);
});

schema.core.Constrained.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7071__auto__,k9579,else__7072__auto__){
var self__ = this;
var this__7071__auto____$1 = this;
var G__9581 = (((k9579 instanceof cljs.core.Keyword))?k9579.fqn:null);
switch (G__9581) {
case "schema":
return self__.schema;

break;
case "postcondition":
return self__.postcondition;

break;
case "post-name":
return self__.post_name;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9579,else__7072__auto__);

}
});

schema.core.Constrained.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7083__auto__,writer__7084__auto__,opts__7085__auto__){
var self__ = this;
var this__7083__auto____$1 = this;
var pr_pair__7086__auto__ = ((function (this__7083__auto____$1){
return (function (keyval__7087__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7084__auto__,cljs.core.pr_writer,""," ","",opts__7085__auto__,keyval__7087__auto__);
});})(this__7083__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7084__auto__,pr_pair__7086__auto__,"#schema.core.Constrained{",", ","}",opts__7085__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),self__.postcondition],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"post-name","post-name",491455269),self__.post_name],null))], null),self__.__extmap));
});

schema.core.Constrained.prototype.cljs$core$IIterable$ = true;

schema.core.Constrained.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9578){
var self__ = this;
var G__9578__$1 = this;
return (new cljs.core.RecordIter((0),G__9578__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),new cljs.core.Keyword(null,"post-name","post-name",491455269)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Constrained.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7067__auto__){
var self__ = this;
var this__7067__auto____$1 = this;
return self__.__meta;
});

schema.core.Constrained.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7063__auto__){
var self__ = this;
var this__7063__auto____$1 = this;
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Constrained.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7073__auto__){
var self__ = this;
var this__7073__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Constrained.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7064__auto__){
var self__ = this;
var this__7064__auto____$1 = this;
var h__6890__auto__ = self__.__hash;
if(!((h__6890__auto__ == null))){
return h__6890__auto__;
} else {
var h__6890__auto____$1 = cljs.core.hash_imap.call(null,this__7064__auto____$1);
self__.__hash = h__6890__auto____$1;

return h__6890__auto____$1;
}
});

schema.core.Constrained.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7065__auto__,other__7066__auto__){
var self__ = this;
var this__7065__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6443__auto__ = other__7066__auto__;
if(cljs.core.truth_(and__6443__auto__)){
var and__6443__auto____$1 = (this__7065__auto____$1.constructor === other__7066__auto__.constructor);
if(and__6443__auto____$1){
return cljs.core.equiv_map.call(null,this__7065__auto____$1,other__7066__auto__);
} else {
return and__6443__auto____$1;
}
} else {
return and__6443__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Constrained.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7078__auto__,k__7079__auto__){
var self__ = this;
var this__7078__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"post-name","post-name",491455269),null,new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),null], null), null),k__7079__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7078__auto____$1),self__.__meta),k__7079__auto__);
} else {
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7079__auto__)),null));
}
});

schema.core.Constrained.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7076__auto__,k__7077__auto__,G__9578){
var self__ = this;
var this__7076__auto____$1 = this;
var pred__9582 = cljs.core.keyword_identical_QMARK_;
var expr__9583 = k__7077__auto__;
if(cljs.core.truth_(pred__9582.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__9583))){
return (new schema.core.Constrained(G__9578,self__.postcondition,self__.post_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9582.call(null,new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),expr__9583))){
return (new schema.core.Constrained(self__.schema,G__9578,self__.post_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9582.call(null,new cljs.core.Keyword(null,"post-name","post-name",491455269),expr__9583))){
return (new schema.core.Constrained(self__.schema,self__.postcondition,G__9578,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7077__auto__,G__9578),null));
}
}
}
});

schema.core.Constrained.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7081__auto__){
var self__ = this;
var this__7081__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),self__.postcondition],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"post-name","post-name",491455269),self__.post_name],null))], null),self__.__extmap));
});

schema.core.Constrained.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7068__auto__,G__9578){
var self__ = this;
var this__7068__auto____$1 = this;
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,G__9578,self__.__extmap,self__.__hash));
});

schema.core.Constrained.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7074__auto__,entry__7075__auto__){
var self__ = this;
var this__7074__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7075__auto__)){
return cljs.core._assoc.call(null,this__7074__auto____$1,cljs.core._nth.call(null,entry__7075__auto__,(0)),cljs.core._nth.call(null,entry__7075__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7074__auto____$1,entry__7075__auto__);
}
});

schema.core.Constrained.prototype.schema$core$Schema$ = true;

schema.core.Constrained.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema], null)], null),null,schema.spec.core.precondition.call(null,this$__$1,self__.postcondition,((function (this$__$1){
return (function (p1__9577_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__9577_SHARP_),self__.post_name);
});})(this$__$1))
));
});

schema.core.Constrained.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.post_name),schema.core.explain.call(null,self__.schema)),new cljs.core.Symbol(null,"constrained","constrained",-2057147788,null));
});

schema.core.Constrained.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"postcondition","postcondition",903430305,null),new cljs.core.Symbol(null,"post-name","post-name",2131986796,null)], null);
});

schema.core.Constrained.cljs$lang$type = true;

schema.core.Constrained.cljs$lang$ctorPrSeq = (function (this__7103__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Constrained");
});

schema.core.Constrained.cljs$lang$ctorPrWriter = (function (this__7103__auto__,writer__7104__auto__){
return cljs.core._write.call(null,writer__7104__auto__,"schema.core/Constrained");
});

schema.core.__GT_Constrained = (function schema$core$__GT_Constrained(schema__$1,postcondition,post_name){
return (new schema.core.Constrained(schema__$1,postcondition,post_name,null,null,null));
});

schema.core.map__GT_Constrained = (function schema$core$map__GT_Constrained(G__9580){
return (new schema.core.Constrained(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__9580),new cljs.core.Keyword(null,"postcondition","postcondition",-737101222).cljs$core$IFn$_invoke$arity$1(G__9580),new cljs.core.Keyword(null,"post-name","post-name",491455269).cljs$core$IFn$_invoke$arity$1(G__9580),null,cljs.core.dissoc.call(null,G__9580,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),new cljs.core.Keyword(null,"post-name","post-name",491455269)),null));
});

/**
 * A schema with an additional post-condition.  Differs from `conditional`
 * with a single schema, in that the predicate checked *after* the main
 * schema.  This can lead to better error messages, and is often better
 * suited for coercion.
 */
schema.core.constrained = (function schema$core$constrained(var_args){
var args9586 = [];
var len__7513__auto___9589 = arguments.length;
var i__7514__auto___9590 = (0);
while(true){
if((i__7514__auto___9590 < len__7513__auto___9589)){
args9586.push((arguments[i__7514__auto___9590]));

var G__9591 = (i__7514__auto___9590 + (1));
i__7514__auto___9590 = G__9591;
continue;
} else {
}
break;
}

var G__9588 = args9586.length;
switch (G__9588) {
case 2:
return schema.core.constrained.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return schema.core.constrained.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9586.length)].join('')));

}
});

schema.core.constrained.cljs$core$IFn$_invoke$arity$2 = (function (s,p_QMARK_){
return schema.core.constrained.call(null,s,p_QMARK_,cljs.core.symbol.call(null,schema.utils.fn_name.call(null,p_QMARK_)));
});

schema.core.constrained.cljs$core$IFn$_invoke$arity$3 = (function (s,p_QMARK_,pred_name){
if(cljs.core.ifn_QMARK_.call(null,p_QMARK_)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Not a function: %s",p_QMARK_)));
}

return (new schema.core.Constrained(s,p_QMARK_,pred_name,null,null,null));
});

schema.core.constrained.cljs$lang$maxFixedArity = 3;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {schema.core.HasPrecondition}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {schema.spec.core.CoreSpec}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Both = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7069__auto__,k__7070__auto__){
var self__ = this;
var this__7069__auto____$1 = this;
return cljs.core._lookup.call(null,this__7069__auto____$1,k__7070__auto__,null);
});

schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7071__auto__,k9595,else__7072__auto__){
var self__ = this;
var this__7071__auto____$1 = this;
var G__9597 = (((k9595 instanceof cljs.core.Keyword))?k9595.fqn:null);
switch (G__9597) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9595,else__7072__auto__);

}
});

schema.core.Both.prototype.schema$spec$core$CoreSpec$ = true;

schema.core.Both.prototype.schema$spec$core$CoreSpec$subschemas$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.schemas;
});

schema.core.Both.prototype.schema$spec$core$CoreSpec$checker$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce.call(null,((function (this$__$1){
return (function (f,t){
return ((function (this$__$1){
return (function (x){
var tx = t.call(null,x);
if(cljs.core.truth_(schema.utils.error_QMARK_.call(null,tx))){
return tx;
} else {
return f.call(null,(function (){var or__6455__auto__ = tx;
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return x;
}
})());
}
});
;})(this$__$1))
});})(this$__$1))
,cljs.core.map.call(null,((function (this$__$1){
return (function (p1__9593_SHARP_){
return schema.spec.core.sub_checker.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),p1__9593_SHARP_], null),params);
});})(this$__$1))
,cljs.core.reverse.call(null,self__.schemas)));
});

schema.core.Both.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7083__auto__,writer__7084__auto__,opts__7085__auto__){
var self__ = this;
var this__7083__auto____$1 = this;
var pr_pair__7086__auto__ = ((function (this__7083__auto____$1){
return (function (keyval__7087__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7084__auto__,cljs.core.pr_writer,""," ","",opts__7085__auto__,keyval__7087__auto__);
});})(this__7083__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7084__auto__,pr_pair__7086__auto__,"#schema.core.Both{",", ","}",opts__7085__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IIterable$ = true;

schema.core.Both.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9594){
var self__ = this;
var G__9594__$1 = this;
return (new cljs.core.RecordIter((0),G__9594__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schemas","schemas",575070579)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Both.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7067__auto__){
var self__ = this;
var this__7067__auto____$1 = this;
return self__.__meta;
});

schema.core.Both.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7063__auto__){
var self__ = this;
var this__7063__auto____$1 = this;
return (new schema.core.Both(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Both.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7073__auto__){
var self__ = this;
var this__7073__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7064__auto__){
var self__ = this;
var this__7064__auto____$1 = this;
var h__6890__auto__ = self__.__hash;
if(!((h__6890__auto__ == null))){
return h__6890__auto__;
} else {
var h__6890__auto____$1 = cljs.core.hash_imap.call(null,this__7064__auto____$1);
self__.__hash = h__6890__auto____$1;

return h__6890__auto____$1;
}
});

schema.core.Both.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7065__auto__,other__7066__auto__){
var self__ = this;
var this__7065__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6443__auto__ = other__7066__auto__;
if(cljs.core.truth_(and__6443__auto__)){
var and__6443__auto____$1 = (this__7065__auto____$1.constructor === other__7066__auto__.constructor);
if(and__6443__auto____$1){
return cljs.core.equiv_map.call(null,this__7065__auto____$1,other__7066__auto__);
} else {
return and__6443__auto____$1;
}
} else {
return and__6443__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Both.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7078__auto__,k__7079__auto__){
var self__ = this;
var this__7078__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schemas","schemas",575070579),null], null), null),k__7079__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7078__auto____$1),self__.__meta),k__7079__auto__);
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7079__auto__)),null));
}
});

schema.core.Both.prototype.schema$core$HasPrecondition$ = true;

schema.core.Both.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.call(null,cljs.core.every_pred,cljs.core.map.call(null,cljs.core.comp.call(null,schema.core.precondition,schema.core.spec),self__.schemas));
});

schema.core.Both.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7076__auto__,k__7077__auto__,G__9594){
var self__ = this;
var this__7076__auto____$1 = this;
var pred__9598 = cljs.core.keyword_identical_QMARK_;
var expr__9599 = k__7077__auto__;
if(cljs.core.truth_(pred__9598.call(null,new cljs.core.Keyword(null,"schemas","schemas",575070579),expr__9599))){
return (new schema.core.Both(G__9594,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7077__auto__,G__9594),null));
}
});

schema.core.Both.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7081__auto__){
var self__ = this;
var this__7081__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7068__auto__,G__9594){
var self__ = this;
var this__7068__auto____$1 = this;
return (new schema.core.Both(self__.schemas,G__9594,self__.__extmap,self__.__hash));
});

schema.core.Both.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7074__auto__,entry__7075__auto__){
var self__ = this;
var this__7074__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7075__auto__)){
return cljs.core._assoc.call(null,this__7074__auto____$1,cljs.core._nth.call(null,entry__7075__auto__,(0)),cljs.core._nth.call(null,entry__7075__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7074__auto____$1,entry__7075__auto__);
}
});

schema.core.Both.prototype.schema$core$Schema$ = true;

schema.core.Both.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

schema.core.Both.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol(null,"both","both",1246882687,null),cljs.core.map.call(null,schema.core.explain,self__.schemas));
});

schema.core.Both.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null)], null);
});

schema.core.Both.cljs$lang$type = true;

schema.core.Both.cljs$lang$ctorPrSeq = (function (this__7103__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Both");
});

schema.core.Both.cljs$lang$ctorPrWriter = (function (this__7103__auto__,writer__7104__auto__){
return cljs.core._write.call(null,writer__7104__auto__,"schema.core/Both");
});

schema.core.__GT_Both = (function schema$core$__GT_Both(schemas){
return (new schema.core.Both(schemas,null,null,null));
});

schema.core.map__GT_Both = (function schema$core$map__GT_Both(G__9596){
return (new schema.core.Both(new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(G__9596),null,cljs.core.dissoc.call(null,G__9596,new cljs.core.Keyword(null,"schemas","schemas",575070579)),null));
});

/**
 * A value that must satisfy every schema in schemas.
 * 
 * DEPRECATED: prefer 'conditional' with a single condition
 * instead, or `constrained`.
 * 
 * When used with coercion, coerces each schema in sequence.
 */
schema.core.both = (function schema$core$both(var_args){
var args__7520__auto__ = [];
var len__7513__auto___9603 = arguments.length;
var i__7514__auto___9604 = (0);
while(true){
if((i__7514__auto___9604 < len__7513__auto___9603)){
args__7520__auto__.push((arguments[i__7514__auto___9604]));

var G__9605 = (i__7514__auto___9604 + (1));
i__7514__auto___9604 = G__9605;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((0) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((0)),(0))):null);
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(argseq__7521__auto__);
});

schema.core.both.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.Both(schemas,null,null,null));
});

schema.core.both.cljs$lang$maxFixedArity = (0);

schema.core.both.cljs$lang$applyTo = (function (seq9602){
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9602));
});
/**
 * if the predicate returns truthy, use the if-schema, otherwise use the else-schema
 */
schema.core.if$ = (function schema$core$if(pred,if_schema,else_schema){
return schema.core.conditional.call(null,pred,if_schema,cljs.core.constantly.call(null,true),else_schema);
});
schema.core.var_name = (function schema$core$var_name(v){
var map__9608 = cljs.core.meta.call(null,v);
var map__9608__$1 = ((((!((map__9608 == null)))?((((map__9608.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9608.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9608):map__9608);
var ns = cljs.core.get.call(null,map__9608__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__9608__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.symbol.call(null,[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Recursive = (function (derefable,__meta,__extmap,__hash){
this.derefable = derefable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Recursive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7069__auto__,k__7070__auto__){
var self__ = this;
var this__7069__auto____$1 = this;
return cljs.core._lookup.call(null,this__7069__auto____$1,k__7070__auto__,null);
});

schema.core.Recursive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7071__auto__,k9611,else__7072__auto__){
var self__ = this;
var this__7071__auto____$1 = this;
var G__9613 = (((k9611 instanceof cljs.core.Keyword))?k9611.fqn:null);
switch (G__9613) {
case "derefable":
return self__.derefable;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9611,else__7072__auto__);

}
});

schema.core.Recursive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7083__auto__,writer__7084__auto__,opts__7085__auto__){
var self__ = this;
var this__7083__auto____$1 = this;
var pr_pair__7086__auto__ = ((function (this__7083__auto____$1){
return (function (keyval__7087__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7084__auto__,cljs.core.pr_writer,""," ","",opts__7085__auto__,keyval__7087__auto__);
});})(this__7083__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7084__auto__,pr_pair__7086__auto__,"#schema.core.Recursive{",", ","}",opts__7085__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"derefable","derefable",377265868),self__.derefable],null))], null),self__.__extmap));
});

schema.core.Recursive.prototype.cljs$core$IIterable$ = true;

schema.core.Recursive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9610){
var self__ = this;
var G__9610__$1 = this;
return (new cljs.core.RecordIter((0),G__9610__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"derefable","derefable",377265868)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Recursive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7067__auto__){
var self__ = this;
var this__7067__auto____$1 = this;
return self__.__meta;
});

schema.core.Recursive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7063__auto__){
var self__ = this;
var this__7063__auto____$1 = this;
return (new schema.core.Recursive(self__.derefable,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Recursive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7073__auto__){
var self__ = this;
var this__7073__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Recursive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7064__auto__){
var self__ = this;
var this__7064__auto____$1 = this;
var h__6890__auto__ = self__.__hash;
if(!((h__6890__auto__ == null))){
return h__6890__auto__;
} else {
var h__6890__auto____$1 = cljs.core.hash_imap.call(null,this__7064__auto____$1);
self__.__hash = h__6890__auto____$1;

return h__6890__auto____$1;
}
});

schema.core.Recursive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7065__auto__,other__7066__auto__){
var self__ = this;
var this__7065__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6443__auto__ = other__7066__auto__;
if(cljs.core.truth_(and__6443__auto__)){
var and__6443__auto____$1 = (this__7065__auto____$1.constructor === other__7066__auto__.constructor);
if(and__6443__auto____$1){
return cljs.core.equiv_map.call(null,this__7065__auto____$1,other__7066__auto__);
} else {
return and__6443__auto____$1;
}
} else {
return and__6443__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Recursive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7078__auto__,k__7079__auto__){
var self__ = this;
var this__7078__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"derefable","derefable",377265868),null], null), null),k__7079__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7078__auto____$1),self__.__meta),k__7079__auto__);
} else {
return (new schema.core.Recursive(self__.derefable,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7079__auto__)),null));
}
});

schema.core.Recursive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7076__auto__,k__7077__auto__,G__9610){
var self__ = this;
var this__7076__auto____$1 = this;
var pred__9614 = cljs.core.keyword_identical_QMARK_;
var expr__9615 = k__7077__auto__;
if(cljs.core.truth_(pred__9614.call(null,new cljs.core.Keyword(null,"derefable","derefable",377265868),expr__9615))){
return (new schema.core.Recursive(G__9610,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Recursive(self__.derefable,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7077__auto__,G__9610),null));
}
});

schema.core.Recursive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7081__auto__){
var self__ = this;
var this__7081__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"derefable","derefable",377265868),self__.derefable],null))], null),self__.__extmap));
});

schema.core.Recursive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7068__auto__,G__9610){
var self__ = this;
var this__7068__auto____$1 = this;
return (new schema.core.Recursive(self__.derefable,G__9610,self__.__extmap,self__.__hash));
});

schema.core.Recursive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7074__auto__,entry__7075__auto__){
var self__ = this;
var this__7074__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7075__auto__)){
return cljs.core._assoc.call(null,this__7074__auto____$1,cljs.core._nth.call(null,entry__7075__auto__,(0)),cljs.core._nth.call(null,entry__7075__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7074__auto____$1,entry__7075__auto__);
}
});

schema.core.Recursive.prototype.schema$core$Schema$ = true;

schema.core.Recursive.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.deref.call(null,self__.derefable)], null)], null));
});

schema.core.Recursive.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(((self__.derefable instanceof cljs.core.Var))?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.var_name.call(null,self__.derefable)),new cljs.core.Symbol(null,"var","var",870848730,null)):new cljs.core.Symbol(null,"...","...",-1926939749,null))),new cljs.core.Symbol(null,"recursive","recursive",-1935549897,null));
});

schema.core.Recursive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"derefable","derefable",2017797395,null)], null);
});

schema.core.Recursive.cljs$lang$type = true;

schema.core.Recursive.cljs$lang$ctorPrSeq = (function (this__7103__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Recursive");
});

schema.core.Recursive.cljs$lang$ctorPrWriter = (function (this__7103__auto__,writer__7104__auto__){
return cljs.core._write.call(null,writer__7104__auto__,"schema.core/Recursive");
});

schema.core.__GT_Recursive = (function schema$core$__GT_Recursive(derefable){
return (new schema.core.Recursive(derefable,null,null,null));
});

schema.core.map__GT_Recursive = (function schema$core$map__GT_Recursive(G__9612){
return (new schema.core.Recursive(new cljs.core.Keyword(null,"derefable","derefable",377265868).cljs$core$IFn$_invoke$arity$1(G__9612),null,cljs.core.dissoc.call(null,G__9612,new cljs.core.Keyword(null,"derefable","derefable",377265868)),null));
});

/**
 * Support for (mutually) recursive schemas by passing a var that points to a schema,
 * e.g (recursive #'ExampleRecursiveSchema).
 */
schema.core.recursive = (function schema$core$recursive(schema__$1){
if(((!((schema__$1 == null)))?((((schema__$1.cljs$lang$protocol_mask$partition0$ & (32768))) || (schema__$1.cljs$core$IDeref$))?true:(((!schema__$1.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,schema__$1):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,schema__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Not an IDeref: %s",schema__$1)));
}

return (new schema.core.Recursive(schema__$1,null,null,null));
});
schema.core.atom_QMARK_ = (function schema$core$atom_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (16384))) || (x.cljs$core$IAtom$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,x);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Atomic = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Atomic.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7069__auto__,k__7070__auto__){
var self__ = this;
var this__7069__auto____$1 = this;
return cljs.core._lookup.call(null,this__7069__auto____$1,k__7070__auto__,null);
});

schema.core.Atomic.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7071__auto__,k9623,else__7072__auto__){
var self__ = this;
var this__7071__auto____$1 = this;
var G__9625 = (((k9623 instanceof cljs.core.Keyword))?k9623.fqn:null);
switch (G__9625) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9623,else__7072__auto__);

}
});

schema.core.Atomic.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7083__auto__,writer__7084__auto__,opts__7085__auto__){
var self__ = this;
var this__7083__auto____$1 = this;
var pr_pair__7086__auto__ = ((function (this__7083__auto____$1){
return (function (keyval__7087__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7084__auto__,cljs.core.pr_writer,""," ","",opts__7085__auto__,keyval__7087__auto__);
});})(this__7083__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7084__auto__,pr_pair__7086__auto__,"#schema.core.Atomic{",", ","}",opts__7085__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Atomic.prototype.cljs$core$IIterable$ = true;

schema.core.Atomic.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9622){
var self__ = this;
var G__9622__$1 = this;
return (new cljs.core.RecordIter((0),G__9622__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Atomic.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7067__auto__){
var self__ = this;
var this__7067__auto____$1 = this;
return self__.__meta;
});

schema.core.Atomic.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7063__auto__){
var self__ = this;
var this__7063__auto____$1 = this;
return (new schema.core.Atomic(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Atomic.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7073__auto__){
var self__ = this;
var this__7073__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Atomic.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7064__auto__){
var self__ = this;
var this__7064__auto____$1 = this;
var h__6890__auto__ = self__.__hash;
if(!((h__6890__auto__ == null))){
return h__6890__auto__;
} else {
var h__6890__auto____$1 = cljs.core.hash_imap.call(null,this__7064__auto____$1);
self__.__hash = h__6890__auto____$1;

return h__6890__auto____$1;
}
});

schema.core.Atomic.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7065__auto__,other__7066__auto__){
var self__ = this;
var this__7065__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6443__auto__ = other__7066__auto__;
if(cljs.core.truth_(and__6443__auto__)){
var and__6443__auto____$1 = (this__7065__auto____$1.constructor === other__7066__auto__.constructor);
if(and__6443__auto____$1){
return cljs.core.equiv_map.call(null,this__7065__auto____$1,other__7066__auto__);
} else {
return and__6443__auto____$1;
}
} else {
return and__6443__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Atomic.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7078__auto__,k__7079__auto__){
var self__ = this;
var this__7078__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null], null), null),k__7079__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7078__auto____$1),self__.__meta),k__7079__auto__);
} else {
return (new schema.core.Atomic(self__.schema,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7079__auto__)),null));
}
});

schema.core.Atomic.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7076__auto__,k__7077__auto__,G__9622){
var self__ = this;
var this__7076__auto____$1 = this;
var pred__9626 = cljs.core.keyword_identical_QMARK_;
var expr__9627 = k__7077__auto__;
if(cljs.core.truth_(pred__9626.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__9627))){
return (new schema.core.Atomic(G__9622,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Atomic(self__.schema,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7077__auto__,G__9622),null));
}
});

schema.core.Atomic.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7081__auto__){
var self__ = this;
var this__7081__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Atomic.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7068__auto__,G__9622){
var self__ = this;
var this__7068__auto____$1 = this;
return (new schema.core.Atomic(self__.schema,G__9622,self__.__extmap,self__.__hash));
});

schema.core.Atomic.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7074__auto__,entry__7075__auto__){
var self__ = this;
var this__7074__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7075__auto__)){
return cljs.core._assoc.call(null,this__7074__auto____$1,cljs.core._nth.call(null,entry__7075__auto__,(0)),cljs.core._nth.call(null,entry__7075__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7074__auto____$1,entry__7075__auto__);
}
});

schema.core.Atomic.prototype.schema$core$Schema$ = true;

schema.core.Atomic.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,schema.core.atom_QMARK_,((function (this$__$1){
return (function (p1__8027__8028__auto__){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__8027__8028__auto__),new cljs.core.Symbol(null,"atom?","atom?",-1007535292,null));
});})(this$__$1))
),cljs.core.atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.one_element.call(null,true,self__.schema,((function (this$__$1){
return (function (item_fn,coll){
item_fn.call(null,cljs.core.deref.call(null,coll));

return null;
});})(this$__$1))
)], null),((function (this$__$1){
return (function (_,xs,___$1){
return cljs.core.atom.call(null,cljs.core.first.call(null,xs));
});})(this$__$1))
);
});

schema.core.Atomic.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,self__.schema)),new cljs.core.Symbol(null,"atom","atom",1243487874,null));
});

schema.core.Atomic.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null)], null);
});

schema.core.Atomic.cljs$lang$type = true;

schema.core.Atomic.cljs$lang$ctorPrSeq = (function (this__7103__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Atomic");
});

schema.core.Atomic.cljs$lang$ctorPrWriter = (function (this__7103__auto__,writer__7104__auto__){
return cljs.core._write.call(null,writer__7104__auto__,"schema.core/Atomic");
});

schema.core.__GT_Atomic = (function schema$core$__GT_Atomic(schema__$1){
return (new schema.core.Atomic(schema__$1,null,null,null));
});

schema.core.map__GT_Atomic = (function schema$core$map__GT_Atomic(G__9624){
return (new schema.core.Atomic(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__9624),null,cljs.core.dissoc.call(null,G__9624,new cljs.core.Keyword(null,"schema","schema",-1582001791)),null));
});

/**
 * An atom containing a value matching 'schema'.
 */
schema.core.atom = (function schema$core$atom(schema__$1){
return schema.core.__GT_Atomic.call(null,schema__$1);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.RequiredKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7069__auto__,k__7070__auto__){
var self__ = this;
var this__7069__auto____$1 = this;
return cljs.core._lookup.call(null,this__7069__auto____$1,k__7070__auto__,null);
});

schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7071__auto__,k9631,else__7072__auto__){
var self__ = this;
var this__7071__auto____$1 = this;
var G__9633 = (((k9631 instanceof cljs.core.Keyword))?k9631.fqn:null);
switch (G__9633) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9631,else__7072__auto__);

}
});

schema.core.RequiredKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7083__auto__,writer__7084__auto__,opts__7085__auto__){
var self__ = this;
var this__7083__auto____$1 = this;
var pr_pair__7086__auto__ = ((function (this__7083__auto____$1){
return (function (keyval__7087__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7084__auto__,cljs.core.pr_writer,""," ","",opts__7085__auto__,keyval__7087__auto__);
});})(this__7083__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7084__auto__,pr_pair__7086__auto__,"#schema.core.RequiredKey{",", ","}",opts__7085__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IIterable$ = true;

schema.core.RequiredKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9630){
var self__ = this;
var G__9630__$1 = this;
return (new cljs.core.RecordIter((0),G__9630__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"k","k",-2146297393)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.RequiredKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7067__auto__){
var self__ = this;
var this__7067__auto____$1 = this;
return self__.__meta;
});

schema.core.RequiredKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7063__auto__){
var self__ = this;
var this__7063__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.RequiredKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7073__auto__){
var self__ = this;
var this__7073__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7064__auto__){
var self__ = this;
var this__7064__auto____$1 = this;
var h__6890__auto__ = self__.__hash;
if(!((h__6890__auto__ == null))){
return h__6890__auto__;
} else {
var h__6890__auto____$1 = cljs.core.hash_imap.call(null,this__7064__auto____$1);
self__.__hash = h__6890__auto____$1;

return h__6890__auto____$1;
}
});

schema.core.RequiredKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7065__auto__,other__7066__auto__){
var self__ = this;
var this__7065__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6443__auto__ = other__7066__auto__;
if(cljs.core.truth_(and__6443__auto__)){
var and__6443__auto____$1 = (this__7065__auto____$1.constructor === other__7066__auto__.constructor);
if(and__6443__auto____$1){
return cljs.core.equiv_map.call(null,this__7065__auto____$1,other__7066__auto__);
} else {
return and__6443__auto____$1;
}
} else {
return and__6443__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.RequiredKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7078__auto__,k__7079__auto__){
var self__ = this;
var this__7078__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"k","k",-2146297393),null], null), null),k__7079__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7078__auto____$1),self__.__meta),k__7079__auto__);
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7079__auto__)),null));
}
});

schema.core.RequiredKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7076__auto__,k__7077__auto__,G__9630){
var self__ = this;
var this__7076__auto____$1 = this;
var pred__9634 = cljs.core.keyword_identical_QMARK_;
var expr__9635 = k__7077__auto__;
if(cljs.core.truth_(pred__9634.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),expr__9635))){
return (new schema.core.RequiredKey(G__9630,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7077__auto__,G__9630),null));
}
});

schema.core.RequiredKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7081__auto__){
var self__ = this;
var this__7081__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7068__auto__,G__9630){
var self__ = this;
var this__7068__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,G__9630,self__.__extmap,self__.__hash));
});

schema.core.RequiredKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7074__auto__,entry__7075__auto__){
var self__ = this;
var this__7074__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7075__auto__)){
return cljs.core._assoc.call(null,this__7074__auto____$1,cljs.core._nth.call(null,entry__7075__auto__,(0)),cljs.core._nth.call(null,entry__7075__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7074__auto____$1,entry__7075__auto__);
}
});

schema.core.RequiredKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null)], null);
});

schema.core.RequiredKey.cljs$lang$type = true;

schema.core.RequiredKey.cljs$lang$ctorPrSeq = (function (this__7103__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/RequiredKey");
});

schema.core.RequiredKey.cljs$lang$ctorPrWriter = (function (this__7103__auto__,writer__7104__auto__){
return cljs.core._write.call(null,writer__7104__auto__,"schema.core/RequiredKey");
});

schema.core.__GT_RequiredKey = (function schema$core$__GT_RequiredKey(k){
return (new schema.core.RequiredKey(k,null,null,null));
});

schema.core.map__GT_RequiredKey = (function schema$core$map__GT_RequiredKey(G__9632){
return (new schema.core.RequiredKey(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__9632),null,cljs.core.dissoc.call(null,G__9632,new cljs.core.Keyword(null,"k","k",-2146297393)),null));
});

/**
 * A required key in a map
 */
schema.core.required_key = (function schema$core$required_key(k){
if((k instanceof cljs.core.Keyword)){
return k;
} else {
return (new schema.core.RequiredKey(k,null,null,null));
}
});
schema.core.required_key_QMARK_ = (function schema$core$required_key_QMARK_(ks){
return ((ks instanceof cljs.core.Keyword)) || ((ks instanceof schema.core.RequiredKey));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.OptionalKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7069__auto__,k__7070__auto__){
var self__ = this;
var this__7069__auto____$1 = this;
return cljs.core._lookup.call(null,this__7069__auto____$1,k__7070__auto__,null);
});

schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7071__auto__,k9639,else__7072__auto__){
var self__ = this;
var this__7071__auto____$1 = this;
var G__9641 = (((k9639 instanceof cljs.core.Keyword))?k9639.fqn:null);
switch (G__9641) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9639,else__7072__auto__);

}
});

schema.core.OptionalKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7083__auto__,writer__7084__auto__,opts__7085__auto__){
var self__ = this;
var this__7083__auto____$1 = this;
var pr_pair__7086__auto__ = ((function (this__7083__auto____$1){
return (function (keyval__7087__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7084__auto__,cljs.core.pr_writer,""," ","",opts__7085__auto__,keyval__7087__auto__);
});})(this__7083__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7084__auto__,pr_pair__7086__auto__,"#schema.core.OptionalKey{",", ","}",opts__7085__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IIterable$ = true;

schema.core.OptionalKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9638){
var self__ = this;
var G__9638__$1 = this;
return (new cljs.core.RecordIter((0),G__9638__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"k","k",-2146297393)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.OptionalKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7067__auto__){
var self__ = this;
var this__7067__auto____$1 = this;
return self__.__meta;
});

schema.core.OptionalKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7063__auto__){
var self__ = this;
var this__7063__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.OptionalKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7073__auto__){
var self__ = this;
var this__7073__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7064__auto__){
var self__ = this;
var this__7064__auto____$1 = this;
var h__6890__auto__ = self__.__hash;
if(!((h__6890__auto__ == null))){
return h__6890__auto__;
} else {
var h__6890__auto____$1 = cljs.core.hash_imap.call(null,this__7064__auto____$1);
self__.__hash = h__6890__auto____$1;

return h__6890__auto____$1;
}
});

schema.core.OptionalKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7065__auto__,other__7066__auto__){
var self__ = this;
var this__7065__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6443__auto__ = other__7066__auto__;
if(cljs.core.truth_(and__6443__auto__)){
var and__6443__auto____$1 = (this__7065__auto____$1.constructor === other__7066__auto__.constructor);
if(and__6443__auto____$1){
return cljs.core.equiv_map.call(null,this__7065__auto____$1,other__7066__auto__);
} else {
return and__6443__auto____$1;
}
} else {
return and__6443__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.OptionalKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7078__auto__,k__7079__auto__){
var self__ = this;
var this__7078__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"k","k",-2146297393),null], null), null),k__7079__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7078__auto____$1),self__.__meta),k__7079__auto__);
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7079__auto__)),null));
}
});

schema.core.OptionalKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7076__auto__,k__7077__auto__,G__9638){
var self__ = this;
var this__7076__auto____$1 = this;
var pred__9642 = cljs.core.keyword_identical_QMARK_;
var expr__9643 = k__7077__auto__;
if(cljs.core.truth_(pred__9642.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),expr__9643))){
return (new schema.core.OptionalKey(G__9638,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7077__auto__,G__9638),null));
}
});

schema.core.OptionalKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7081__auto__){
var self__ = this;
var this__7081__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7068__auto__,G__9638){
var self__ = this;
var this__7068__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,G__9638,self__.__extmap,self__.__hash));
});

schema.core.OptionalKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7074__auto__,entry__7075__auto__){
var self__ = this;
var this__7074__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7075__auto__)){
return cljs.core._assoc.call(null,this__7074__auto____$1,cljs.core._nth.call(null,entry__7075__auto__,(0)),cljs.core._nth.call(null,entry__7075__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7074__auto____$1,entry__7075__auto__);
}
});

schema.core.OptionalKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null)], null);
});

schema.core.OptionalKey.cljs$lang$type = true;

schema.core.OptionalKey.cljs$lang$ctorPrSeq = (function (this__7103__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/OptionalKey");
});

schema.core.OptionalKey.cljs$lang$ctorPrWriter = (function (this__7103__auto__,writer__7104__auto__){
return cljs.core._write.call(null,writer__7104__auto__,"schema.core/OptionalKey");
});

schema.core.__GT_OptionalKey = (function schema$core$__GT_OptionalKey(k){
return (new schema.core.OptionalKey(k,null,null,null));
});

schema.core.map__GT_OptionalKey = (function schema$core$map__GT_OptionalKey(G__9640){
return (new schema.core.OptionalKey(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__9640),null,cljs.core.dissoc.call(null,G__9640,new cljs.core.Keyword(null,"k","k",-2146297393)),null));
});

/**
 * An optional key in a map
 */
schema.core.optional_key = (function schema$core$optional_key(k){
return (new schema.core.OptionalKey(k,null,null,null));
});
schema.core.optional_key_QMARK_ = (function schema$core$optional_key_QMARK_(ks){
return (ks instanceof schema.core.OptionalKey);
});
schema.core.explicit_schema_key = (function schema$core$explicit_schema_key(ks){
if((ks instanceof cljs.core.Keyword)){
return ks;
} else {
if((ks instanceof schema.core.RequiredKey)){
return ks.k;
} else {
if(cljs.core.truth_(schema.core.optional_key_QMARK_.call(null,ks))){
return ks.k;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Bad explicit key: %s",ks)));

}
}
}
});
schema.core.specific_key_QMARK_ = (function schema$core$specific_key_QMARK_(ks){
var or__6455__auto__ = schema.core.required_key_QMARK_.call(null,ks);
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return schema.core.optional_key_QMARK_.call(null,ks);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.MapEntry = (function (key_schema,val_schema,__meta,__extmap,__hash){
this.key_schema = key_schema;
this.val_schema = val_schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7069__auto__,k__7070__auto__){
var self__ = this;
var this__7069__auto____$1 = this;
return cljs.core._lookup.call(null,this__7069__auto____$1,k__7070__auto__,null);
});

schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7071__auto__,k9647,else__7072__auto__){
var self__ = this;
var this__7071__auto____$1 = this;
var G__9649 = (((k9647 instanceof cljs.core.Keyword))?k9647.fqn:null);
switch (G__9649) {
case "key-schema":
return self__.key_schema;

break;
case "val-schema":
return self__.val_schema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9647,else__7072__auto__);

}
});

schema.core.MapEntry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7083__auto__,writer__7084__auto__,opts__7085__auto__){
var self__ = this;
var this__7083__auto____$1 = this;
var pr_pair__7086__auto__ = ((function (this__7083__auto____$1){
return (function (keyval__7087__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7084__auto__,cljs.core.pr_writer,""," ","",opts__7085__auto__,keyval__7087__auto__);
});})(this__7083__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7084__auto__,pr_pair__7086__auto__,"#schema.core.MapEntry{",", ","}",opts__7085__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),self__.key_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),self__.val_schema],null))], null),self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IIterable$ = true;

schema.core.MapEntry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9646){
var self__ = this;
var G__9646__$1 = this;
return (new cljs.core.RecordIter((0),G__9646__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.MapEntry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7067__auto__){
var self__ = this;
var this__7067__auto____$1 = this;
return self__.__meta;
});

schema.core.MapEntry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7063__auto__){
var self__ = this;
var this__7063__auto____$1 = this;
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.MapEntry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7073__auto__){
var self__ = this;
var this__7073__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7064__auto__){
var self__ = this;
var this__7064__auto____$1 = this;
var h__6890__auto__ = self__.__hash;
if(!((h__6890__auto__ == null))){
return h__6890__auto__;
} else {
var h__6890__auto____$1 = cljs.core.hash_imap.call(null,this__7064__auto____$1);
self__.__hash = h__6890__auto____$1;

return h__6890__auto____$1;
}
});

schema.core.MapEntry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7065__auto__,other__7066__auto__){
var self__ = this;
var this__7065__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6443__auto__ = other__7066__auto__;
if(cljs.core.truth_(and__6443__auto__)){
var and__6443__auto____$1 = (this__7065__auto____$1.constructor === other__7066__auto__.constructor);
if(and__6443__auto____$1){
return cljs.core.equiv_map.call(null,this__7065__auto____$1,other__7066__auto__);
} else {
return and__6443__auto____$1;
}
} else {
return and__6443__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.MapEntry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7078__auto__,k__7079__auto__){
var self__ = this;
var this__7078__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),null,new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),null], null), null),k__7079__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7078__auto____$1),self__.__meta),k__7079__auto__);
} else {
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7079__auto__)),null));
}
});

schema.core.MapEntry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7076__auto__,k__7077__auto__,G__9646){
var self__ = this;
var this__7076__auto____$1 = this;
var pred__9650 = cljs.core.keyword_identical_QMARK_;
var expr__9651 = k__7077__auto__;
if(cljs.core.truth_(pred__9650.call(null,new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),expr__9651))){
return (new schema.core.MapEntry(G__9646,self__.val_schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9650.call(null,new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),expr__9651))){
return (new schema.core.MapEntry(self__.key_schema,G__9646,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7077__auto__,G__9646),null));
}
}
});

schema.core.MapEntry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7081__auto__){
var self__ = this;
var this__7081__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),self__.key_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),self__.val_schema],null))], null),self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7068__auto__,G__9646){
var self__ = this;
var this__7068__auto____$1 = this;
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,G__9646,self__.__extmap,self__.__hash));
});

schema.core.MapEntry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7074__auto__,entry__7075__auto__){
var self__ = this;
var this__7074__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7075__auto__)){
return cljs.core._assoc.call(null,this__7074__auto____$1,cljs.core._nth.call(null,entry__7075__auto__,(0)),cljs.core._nth.call(null,entry__7075__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7074__auto____$1,entry__7075__auto__);
}
});

schema.core.MapEntry.prototype.schema$core$Schema$ = true;

schema.core.MapEntry.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,cljs.core.vec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.one_element.call(null,true,self__.key_schema,((function (this$__$1){
return (function (item_fn,e){
item_fn.call(null,cljs.core.key.call(null,e));

return e;
});})(this$__$1))
),schema.spec.collection.one_element.call(null,true,self__.val_schema,((function (this$__$1){
return (function (item_fn,e){
item_fn.call(null,cljs.core.val.call(null,e));

return null;
});})(this$__$1))
)], null),((function (this$__$1){
return (function (p__9653,p__9654,_){
var vec__9655 = p__9653;
var k = cljs.core.nth.call(null,vec__9655,(0),null);
var vec__9656 = p__9654;
var xk = cljs.core.nth.call(null,vec__9656,(0),null);
var xv = cljs.core.nth.call(null,vec__9656,(1),null);
var temp__4423__auto__ = schema.utils.error_val.call(null,xk);
if(cljs.core.truth_(temp__4423__auto__)){
var k_err = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_err,new cljs.core.Symbol(null,"invalid-key","invalid-key",-1461682245,null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,schema.utils.error_val.call(null,xv)], null);
}
});})(this$__$1))
);
});

schema.core.MapEntry.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,self__.val_schema)),schema.core.explain.call(null,self__.key_schema)),new cljs.core.Symbol(null,"map-entry","map-entry",329617471,null));
});

schema.core.MapEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key-schema","key-schema",543870801,null),new cljs.core.Symbol(null,"val-schema","val-schema",-374242092,null)], null);
});

schema.core.MapEntry.cljs$lang$type = true;

schema.core.MapEntry.cljs$lang$ctorPrSeq = (function (this__7103__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/MapEntry");
});

schema.core.MapEntry.cljs$lang$ctorPrWriter = (function (this__7103__auto__,writer__7104__auto__){
return cljs.core._write.call(null,writer__7104__auto__,"schema.core/MapEntry");
});

schema.core.__GT_MapEntry = (function schema$core$__GT_MapEntry(key_schema,val_schema){
return (new schema.core.MapEntry(key_schema,val_schema,null,null,null));
});

schema.core.map__GT_MapEntry = (function schema$core$map__GT_MapEntry(G__9648){
return (new schema.core.MapEntry(new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726).cljs$core$IFn$_invoke$arity$1(G__9648),new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619).cljs$core$IFn$_invoke$arity$1(G__9648),null,cljs.core.dissoc.call(null,G__9648,new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619)),null));
});

schema.core.map_entry = (function schema$core$map_entry(key_schema,val_schema){
return (new schema.core.MapEntry(key_schema,val_schema,null,null,null));
});
schema.core.find_extra_keys_schema = (function schema$core$find_extra_keys_schema(map_schema){
var key_schemata = cljs.core.remove.call(null,schema.core.specific_key_QMARK_,cljs.core.keys.call(null,map_schema));
if((cljs.core.count.call(null,key_schemata) < (2))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"More than one non-optional/required key schemata: %s",cljs.core.vec.call(null,key_schemata))));
}

return cljs.core.first.call(null,key_schemata);
});
schema.core.explain_kspec = (function schema$core$explain_kspec(kspec){
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,kspec))){
if((kspec instanceof cljs.core.Keyword)){
return kspec;
} else {
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explicit_schema_key.call(null,kspec)),(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,kspec))?new cljs.core.Symbol(null,"required-key","required-key",1624616412,null):(cljs.core.truth_(schema.core.optional_key_QMARK_.call(null,kspec))?new cljs.core.Symbol(null,"optional-key","optional-key",988406145,null):null)));
}
} else {
return schema.core.explain.call(null,kspec);
}
});
schema.core.map_elements = (function schema$core$map_elements(this$){
var extra_keys_schema = schema.core.find_extra_keys_schema.call(null,this$);
var duplicate_keys_9675 = cljs.core.mapv.call(null,schema.core.explain_kspec,cljs.core.apply.call(null,cljs.core.concat,cljs.core.filter.call(null,((function (extra_keys_schema){
return (function (p1__9658_SHARP_){
return (cljs.core.count.call(null,p1__9658_SHARP_) > (1));
});})(extra_keys_schema))
,cljs.core.vals.call(null,cljs.core.group_by.call(null,schema.core.explicit_schema_key,cljs.core.keys.call(null,cljs.core.dissoc.call(null,this$,extra_keys_schema)))))));
if(cljs.core.empty_QMARK_.call(null,duplicate_keys_9675)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Schema has multiple variants of the same explicit key: %s",duplicate_keys_9675)));
}

return cljs.core.concat.call(null,(function (){var iter__7227__auto__ = ((function (extra_keys_schema){
return (function schema$core$map_elements_$_iter__9667(s__9668){
return (new cljs.core.LazySeq(null,((function (extra_keys_schema){
return (function (){
var s__9668__$1 = s__9668;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__9668__$1);
if(temp__4425__auto__){
var s__9668__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9668__$2)){
var c__7225__auto__ = cljs.core.chunk_first.call(null,s__9668__$2);
var size__7226__auto__ = cljs.core.count.call(null,c__7225__auto__);
var b__9670 = cljs.core.chunk_buffer.call(null,size__7226__auto__);
if((function (){var i__9669 = (0);
while(true){
if((i__9669 < size__7226__auto__)){
var vec__9673 = cljs.core._nth.call(null,c__7225__auto__,i__9669);
var k = cljs.core.nth.call(null,vec__9673,(0),null);
var v = cljs.core.nth.call(null,vec__9673,(1),null);
cljs.core.chunk_append.call(null,b__9670,(function (){var rk = schema.core.explicit_schema_key.call(null,k);
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
return schema.spec.collection.one_element.call(null,required_QMARK_,schema.core.map_entry.call(null,schema.core.eq.call(null,rk),v),((function (i__9669,rk,required_QMARK_,vec__9673,k,v,c__7225__auto__,size__7226__auto__,b__9670,s__9668__$2,temp__4425__auto__,extra_keys_schema){
return (function (item_fn,m){
var e = cljs.core.find.call(null,m,rk);
if(cljs.core.truth_(e)){
item_fn.call(null,e);
} else {
if(cljs.core.truth_(required_QMARK_)){
item_fn.call(null,schema.utils.error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rk,new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null)], null)));
} else {
}
}

if(cljs.core.truth_(e)){
return cljs.core.dissoc.call(null,m,rk);
} else {
return m;
}
});})(i__9669,rk,required_QMARK_,vec__9673,k,v,c__7225__auto__,size__7226__auto__,b__9670,s__9668__$2,temp__4425__auto__,extra_keys_schema))
);
})());

var G__9676 = (i__9669 + (1));
i__9669 = G__9676;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9670),schema$core$map_elements_$_iter__9667.call(null,cljs.core.chunk_rest.call(null,s__9668__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9670),null);
}
} else {
var vec__9674 = cljs.core.first.call(null,s__9668__$2);
var k = cljs.core.nth.call(null,vec__9674,(0),null);
var v = cljs.core.nth.call(null,vec__9674,(1),null);
return cljs.core.cons.call(null,(function (){var rk = schema.core.explicit_schema_key.call(null,k);
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
return schema.spec.collection.one_element.call(null,required_QMARK_,schema.core.map_entry.call(null,schema.core.eq.call(null,rk),v),((function (rk,required_QMARK_,vec__9674,k,v,s__9668__$2,temp__4425__auto__,extra_keys_schema){
return (function (item_fn,m){
var e = cljs.core.find.call(null,m,rk);
if(cljs.core.truth_(e)){
item_fn.call(null,e);
} else {
if(cljs.core.truth_(required_QMARK_)){
item_fn.call(null,schema.utils.error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rk,new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null)], null)));
} else {
}
}

if(cljs.core.truth_(e)){
return cljs.core.dissoc.call(null,m,rk);
} else {
return m;
}
});})(rk,required_QMARK_,vec__9674,k,v,s__9668__$2,temp__4425__auto__,extra_keys_schema))
);
})(),schema$core$map_elements_$_iter__9667.call(null,cljs.core.rest.call(null,s__9668__$2)));
}
} else {
return null;
}
break;
}
});})(extra_keys_schema))
,null,null));
});})(extra_keys_schema))
;
return iter__7227__auto__.call(null,cljs.core.dissoc.call(null,this$,extra_keys_schema));
})(),(cljs.core.truth_(extra_keys_schema)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements.call(null,cljs.core.apply.call(null,schema.core.map_entry,cljs.core.find.call(null,this$,extra_keys_schema)))], null):null));
});
schema.core.map_error = (function schema$core$map_error(){
return (function (_,elts,extra){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.concat.call(null,cljs.core.keep.call(null,schema.utils.error_val,elts),(function (){var iter__7227__auto__ = (function schema$core$map_error_$_iter__9685(s__9686){
return (new cljs.core.LazySeq(null,(function (){
var s__9686__$1 = s__9686;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__9686__$1);
if(temp__4425__auto__){
var s__9686__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9686__$2)){
var c__7225__auto__ = cljs.core.chunk_first.call(null,s__9686__$2);
var size__7226__auto__ = cljs.core.count.call(null,c__7225__auto__);
var b__9688 = cljs.core.chunk_buffer.call(null,size__7226__auto__);
if((function (){var i__9687 = (0);
while(true){
if((i__9687 < size__7226__auto__)){
var vec__9691 = cljs.core._nth.call(null,c__7225__auto__,i__9687);
var k = cljs.core.nth.call(null,vec__9691,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__9691,(1),null);
cljs.core.chunk_append.call(null,b__9688,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Symbol(null,"disallowed-key","disallowed-key",-1877785633,null)], null));

var G__9693 = (i__9687 + (1));
i__9687 = G__9693;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9688),schema$core$map_error_$_iter__9685.call(null,cljs.core.chunk_rest.call(null,s__9686__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9688),null);
}
} else {
var vec__9692 = cljs.core.first.call(null,s__9686__$2);
var k = cljs.core.nth.call(null,vec__9692,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__9692,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Symbol(null,"disallowed-key","disallowed-key",-1877785633,null)], null),schema$core$map_error_$_iter__9685.call(null,cljs.core.rest.call(null,s__9686__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7227__auto__.call(null,extra);
})()));
});
});
schema.core.map_spec = (function schema$core$map_spec(this$){
return schema.spec.collection.collection_spec.call(null,schema.spec.core.precondition.call(null,this$,cljs.core.map_QMARK_,(function (p1__8027__8028__auto__){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__8027__8028__auto__),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
})),(function (p1__9694_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,p1__9694_SHARP_);
}),schema.core.map_elements.call(null,this$),schema.core.map_error.call(null));
});
schema.core.map_explain = (function schema$core$map_explain(this$){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7227__auto__ = (function schema$core$map_explain_$_iter__9703(s__9704){
return (new cljs.core.LazySeq(null,(function (){
var s__9704__$1 = s__9704;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__9704__$1);
if(temp__4425__auto__){
var s__9704__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9704__$2)){
var c__7225__auto__ = cljs.core.chunk_first.call(null,s__9704__$2);
var size__7226__auto__ = cljs.core.count.call(null,c__7225__auto__);
var b__9706 = cljs.core.chunk_buffer.call(null,size__7226__auto__);
if((function (){var i__9705 = (0);
while(true){
if((i__9705 < size__7226__auto__)){
var vec__9709 = cljs.core._nth.call(null,c__7225__auto__,i__9705);
var k = cljs.core.nth.call(null,vec__9709,(0),null);
var v = cljs.core.nth.call(null,vec__9709,(1),null);
cljs.core.chunk_append.call(null,b__9706,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain_kspec.call(null,k),schema.core.explain.call(null,v)], null));

var G__9711 = (i__9705 + (1));
i__9705 = G__9711;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9706),schema$core$map_explain_$_iter__9703.call(null,cljs.core.chunk_rest.call(null,s__9704__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9706),null);
}
} else {
var vec__9710 = cljs.core.first.call(null,s__9704__$2);
var k = cljs.core.nth.call(null,vec__9710,(0),null);
var v = cljs.core.nth.call(null,vec__9710,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain_kspec.call(null,k),schema.core.explain.call(null,v)], null),schema$core$map_explain_$_iter__9703.call(null,cljs.core.rest.call(null,s__9704__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7227__auto__.call(null,this$);
})());
});
cljs.core.PersistentArrayMap.prototype.schema$core$Schema$ = true;

cljs.core.PersistentArrayMap.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_spec.call(null,this$__$1);
});

cljs.core.PersistentArrayMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_explain.call(null,this$__$1);
});

cljs.core.PersistentHashMap.prototype.schema$core$Schema$ = true;

cljs.core.PersistentHashMap.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_spec.call(null,this$__$1);
});

cljs.core.PersistentHashMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_explain.call(null,this$__$1);
});
cljs.core.PersistentHashSet.prototype.schema$core$Schema$ = true;

cljs.core.PersistentHashSet.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,this$__$1),(1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Set schema must have exactly one element")));
}

return schema.spec.collection.collection_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,cljs.core.set_QMARK_,((function (this$__$1){
return (function (p1__8027__8028__auto__){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__8027__8028__auto__),new cljs.core.Symbol(null,"set?","set?",1636014792,null));
});})(this$__$1))
),cljs.core.set,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements.call(null,cljs.core.first.call(null,this$__$1))], null),((function (this$__$1){
return (function (_,xs,___$1){
return cljs.core.set.call(null,cljs.core.keep.call(null,schema.utils.error_val,xs));
});})(this$__$1))
);
});

cljs.core.PersistentHashSet.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain.call(null,cljs.core.first.call(null,this$__$1))], null));
});
schema.core.queue_QMARK_ = (function schema$core$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
schema.core.as_queue = (function schema$core$as_queue(col){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.PersistentQueue.EMPTY,col);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Queue = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Queue.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7069__auto__,k__7070__auto__){
var self__ = this;
var this__7069__auto____$1 = this;
return cljs.core._lookup.call(null,this__7069__auto____$1,k__7070__auto__,null);
});

schema.core.Queue.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7071__auto__,k9713,else__7072__auto__){
var self__ = this;
var this__7071__auto____$1 = this;
var G__9715 = (((k9713 instanceof cljs.core.Keyword))?k9713.fqn:null);
switch (G__9715) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9713,else__7072__auto__);

}
});

schema.core.Queue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7083__auto__,writer__7084__auto__,opts__7085__auto__){
var self__ = this;
var this__7083__auto____$1 = this;
var pr_pair__7086__auto__ = ((function (this__7083__auto____$1){
return (function (keyval__7087__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7084__auto__,cljs.core.pr_writer,""," ","",opts__7085__auto__,keyval__7087__auto__);
});})(this__7083__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7084__auto__,pr_pair__7086__auto__,"#schema.core.Queue{",", ","}",opts__7085__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Queue.prototype.cljs$core$IIterable$ = true;

schema.core.Queue.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9712){
var self__ = this;
var G__9712__$1 = this;
return (new cljs.core.RecordIter((0),G__9712__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Queue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7067__auto__){
var self__ = this;
var this__7067__auto____$1 = this;
return self__.__meta;
});

schema.core.Queue.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7063__auto__){
var self__ = this;
var this__7063__auto____$1 = this;
return (new schema.core.Queue(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Queue.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7073__auto__){
var self__ = this;
var this__7073__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Queue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7064__auto__){
var self__ = this;
var this__7064__auto____$1 = this;
var h__6890__auto__ = self__.__hash;
if(!((h__6890__auto__ == null))){
return h__6890__auto__;
} else {
var h__6890__auto____$1 = cljs.core.hash_imap.call(null,this__7064__auto____$1);
self__.__hash = h__6890__auto____$1;

return h__6890__auto____$1;
}
});

schema.core.Queue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7065__auto__,other__7066__auto__){
var self__ = this;
var this__7065__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6443__auto__ = other__7066__auto__;
if(cljs.core.truth_(and__6443__auto__)){
var and__6443__auto____$1 = (this__7065__auto____$1.constructor === other__7066__auto__.constructor);
if(and__6443__auto____$1){
return cljs.core.equiv_map.call(null,this__7065__auto____$1,other__7066__auto__);
} else {
return and__6443__auto____$1;
}
} else {
return and__6443__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Queue.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7078__auto__,k__7079__auto__){
var self__ = this;
var this__7078__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null], null), null),k__7079__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7078__auto____$1),self__.__meta),k__7079__auto__);
} else {
return (new schema.core.Queue(self__.schema,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7079__auto__)),null));
}
});

schema.core.Queue.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7076__auto__,k__7077__auto__,G__9712){
var self__ = this;
var this__7076__auto____$1 = this;
var pred__9716 = cljs.core.keyword_identical_QMARK_;
var expr__9717 = k__7077__auto__;
if(cljs.core.truth_(pred__9716.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__9717))){
return (new schema.core.Queue(G__9712,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Queue(self__.schema,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7077__auto__,G__9712),null));
}
});

schema.core.Queue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7081__auto__){
var self__ = this;
var this__7081__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Queue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7068__auto__,G__9712){
var self__ = this;
var this__7068__auto____$1 = this;
return (new schema.core.Queue(self__.schema,G__9712,self__.__extmap,self__.__hash));
});

schema.core.Queue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7074__auto__,entry__7075__auto__){
var self__ = this;
var this__7074__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7075__auto__)){
return cljs.core._assoc.call(null,this__7074__auto____$1,cljs.core._nth.call(null,entry__7075__auto__,(0)),cljs.core._nth.call(null,entry__7075__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7074__auto____$1,entry__7075__auto__);
}
});

schema.core.Queue.prototype.schema$core$Schema$ = true;

schema.core.Queue.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,schema.core.queue_QMARK_,((function (this$__$1){
return (function (p1__8027__8028__auto__){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__8027__8028__auto__),new cljs.core.Symbol(null,"queue?","queue?",-880510795,null));
});})(this$__$1))
),schema.core.as_queue,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements.call(null,self__.schema)], null),((function (this$__$1){
return (function (_,xs,___$1){
return schema.core.as_queue.call(null,cljs.core.keep.call(null,schema.utils.error_val,xs));
});})(this$__$1))
);
});

schema.core.Queue.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,self__.schema)),new cljs.core.Symbol(null,"queue","queue",-1198599890,null));
});

schema.core.Queue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null)], null);
});

schema.core.Queue.cljs$lang$type = true;

schema.core.Queue.cljs$lang$ctorPrSeq = (function (this__7103__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Queue");
});

schema.core.Queue.cljs$lang$ctorPrWriter = (function (this__7103__auto__,writer__7104__auto__){
return cljs.core._write.call(null,writer__7104__auto__,"schema.core/Queue");
});

schema.core.__GT_Queue = (function schema$core$__GT_Queue(schema__$1){
return (new schema.core.Queue(schema__$1,null,null,null));
});

schema.core.map__GT_Queue = (function schema$core$map__GT_Queue(G__9714){
return (new schema.core.Queue(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__9714),null,cljs.core.dissoc.call(null,G__9714,new cljs.core.Keyword(null,"schema","schema",-1582001791)),null));
});

/**
 * Defines a schema satisfied by instances of clojure.lang.PersistentQueue
 *   (clj.core/PersistentQueue in ClojureScript) whose values satisfy x.
 */
schema.core.queue = (function schema$core$queue(x){
return (new schema.core.Queue(x,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.One = (function (schema,optional_QMARK_,name,__meta,__extmap,__hash){
this.schema = schema;
this.optional_QMARK_ = optional_QMARK_;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7069__auto__,k__7070__auto__){
var self__ = this;
var this__7069__auto____$1 = this;
return cljs.core._lookup.call(null,this__7069__auto____$1,k__7070__auto__,null);
});

schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7071__auto__,k9721,else__7072__auto__){
var self__ = this;
var this__7071__auto____$1 = this;
var G__9723 = (((k9721 instanceof cljs.core.Keyword))?k9721.fqn:null);
switch (G__9723) {
case "schema":
return self__.schema;

break;
case "optional?":
return self__.optional_QMARK_;

break;
case "name":
return self__.name;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9721,else__7072__auto__);

}
});

schema.core.One.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7083__auto__,writer__7084__auto__,opts__7085__auto__){
var self__ = this;
var this__7083__auto____$1 = this;
var pr_pair__7086__auto__ = ((function (this__7083__auto____$1){
return (function (keyval__7087__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7084__auto__,cljs.core.pr_writer,""," ","",opts__7085__auto__,keyval__7087__auto__);
});})(this__7083__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7084__auto__,pr_pair__7086__auto__,"#schema.core.One{",", ","}",opts__7085__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"optional?","optional?",1184638129),self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});

schema.core.One.prototype.cljs$core$IIterable$ = true;

schema.core.One.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9720){
var self__ = this;
var G__9720__$1 = this;
return (new cljs.core.RecordIter((0),G__9720__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"optional?","optional?",1184638129),new cljs.core.Keyword(null,"name","name",1843675177)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.One.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7067__auto__){
var self__ = this;
var this__7067__auto____$1 = this;
return self__.__meta;
});

schema.core.One.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7063__auto__){
var self__ = this;
var this__7063__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.One.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7073__auto__){
var self__ = this;
var this__7073__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.One.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7064__auto__){
var self__ = this;
var this__7064__auto____$1 = this;
var h__6890__auto__ = self__.__hash;
if(!((h__6890__auto__ == null))){
return h__6890__auto__;
} else {
var h__6890__auto____$1 = cljs.core.hash_imap.call(null,this__7064__auto____$1);
self__.__hash = h__6890__auto____$1;

return h__6890__auto____$1;
}
});

schema.core.One.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7065__auto__,other__7066__auto__){
var self__ = this;
var this__7065__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6443__auto__ = other__7066__auto__;
if(cljs.core.truth_(and__6443__auto__)){
var and__6443__auto____$1 = (this__7065__auto____$1.constructor === other__7066__auto__.constructor);
if(and__6443__auto____$1){
return cljs.core.equiv_map.call(null,this__7065__auto____$1,other__7066__auto__);
} else {
return and__6443__auto____$1;
}
} else {
return and__6443__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.One.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7078__auto__,k__7079__auto__){
var self__ = this;
var this__7078__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"optional?","optional?",1184638129),null], null), null),k__7079__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7078__auto____$1),self__.__meta),k__7079__auto__);
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7079__auto__)),null));
}
});

schema.core.One.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7076__auto__,k__7077__auto__,G__9720){
var self__ = this;
var this__7076__auto____$1 = this;
var pred__9724 = cljs.core.keyword_identical_QMARK_;
var expr__9725 = k__7077__auto__;
if(cljs.core.truth_(pred__9724.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__9725))){
return (new schema.core.One(G__9720,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9724.call(null,new cljs.core.Keyword(null,"optional?","optional?",1184638129),expr__9725))){
return (new schema.core.One(self__.schema,G__9720,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9724.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__9725))){
return (new schema.core.One(self__.schema,self__.optional_QMARK_,G__9720,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7077__auto__,G__9720),null));
}
}
}
});

schema.core.One.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7081__auto__){
var self__ = this;
var this__7081__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"optional?","optional?",1184638129),self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});

schema.core.One.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7068__auto__,G__9720){
var self__ = this;
var this__7068__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,G__9720,self__.__extmap,self__.__hash));
});

schema.core.One.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7074__auto__,entry__7075__auto__){
var self__ = this;
var this__7074__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7075__auto__)){
return cljs.core._assoc.call(null,this__7074__auto____$1,cljs.core._nth.call(null,entry__7075__auto__,(0)),cljs.core._nth.call(null,entry__7075__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7074__auto____$1,entry__7075__auto__);
}
});

schema.core.One.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"optional?","optional?",-1469797640,null),new cljs.core.Symbol(null,"name","name",-810760592,null)], null);
});

schema.core.One.cljs$lang$type = true;

schema.core.One.cljs$lang$ctorPrSeq = (function (this__7103__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/One");
});

schema.core.One.cljs$lang$ctorPrWriter = (function (this__7103__auto__,writer__7104__auto__){
return cljs.core._write.call(null,writer__7104__auto__,"schema.core/One");
});

schema.core.__GT_One = (function schema$core$__GT_One(schema__$1,optional_QMARK_,name){
return (new schema.core.One(schema__$1,optional_QMARK_,name,null,null,null));
});

schema.core.map__GT_One = (function schema$core$map__GT_One(G__9722){
return (new schema.core.One(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__9722),new cljs.core.Keyword(null,"optional?","optional?",1184638129).cljs$core$IFn$_invoke$arity$1(G__9722),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__9722),null,cljs.core.dissoc.call(null,G__9722,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"optional?","optional?",1184638129),new cljs.core.Keyword(null,"name","name",1843675177)),null));
});

/**
 * A single required element of a sequence (not repeated, the implicit default)
 */
schema.core.one = (function schema$core$one(schema__$1,name){
return (new schema.core.One(schema__$1,false,name,null,null,null));
});
/**
 * A single optional element of a sequence (not repeated, the implicit default)
 */
schema.core.optional = (function schema$core$optional(schema__$1,name){
return (new schema.core.One(schema__$1,true,name,null,null,null));
});
schema.core.parse_sequence_schema = (function schema$core$parse_sequence_schema(s){

var vec__9733 = cljs.core.split_with.call(null,(function (p1__9728_SHARP_){
return ((p1__9728_SHARP_ instanceof schema.core.One)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"optional?","optional?",1184638129).cljs$core$IFn$_invoke$arity$1(p1__9728_SHARP_)));
}),s);
var required = cljs.core.nth.call(null,vec__9733,(0),null);
var more = cljs.core.nth.call(null,vec__9733,(1),null);
var vec__9734 = cljs.core.split_with.call(null,((function (vec__9733,required,more){
return (function (p1__9729_SHARP_){
var and__6443__auto__ = (p1__9729_SHARP_ instanceof schema.core.One);
if(and__6443__auto__){
return new cljs.core.Keyword(null,"optional?","optional?",1184638129).cljs$core$IFn$_invoke$arity$1(p1__9729_SHARP_);
} else {
return and__6443__auto__;
}
});})(vec__9733,required,more))
,more);
var optional = cljs.core.nth.call(null,vec__9734,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__9734,(1),null);
if(((cljs.core.count.call(null,more__$1) <= (1))) && (cljs.core.every_QMARK_.call(null,((function (vec__9733,required,more,vec__9734,optional,more__$1){
return (function (p1__9730_SHARP_){
return !((p1__9730_SHARP_ instanceof schema.core.One));
});})(vec__9733,required,more,vec__9734,optional,more__$1))
,more__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"%s is not a valid sequence schema; %s%s%s",s,"a valid sequence schema consists of zero or more `one` elements, ","followed by zero or more `optional` elements, followed by an optional ","schema that will match the remaining elements.")));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,required,optional),cljs.core.first.call(null,more__$1)], null);
});
cljs.core.PersistentVector.prototype.schema$core$Schema$ = true;

cljs.core.PersistentVector.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.spec.collection.collection_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,((function (this$__$1){
return (function (x){
return ((x == null)) || (cljs.core.sequential_QMARK_.call(null,x));
});})(this$__$1))
,((function (this$__$1){
return (function (p1__9735_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__9735_SHARP_),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null));
});})(this$__$1))
),cljs.core.vec,(function (){var vec__9736 = schema.core.parse_sequence_schema.call(null,this$__$1);
var singles = cljs.core.nth.call(null,vec__9736,(0),null);
var multi = cljs.core.nth.call(null,vec__9736,(1),null);
return cljs.core.reduce.call(null,((function (vec__9736,singles,multi,this$__$1){
return (function (more,s){
if(cljs.core.not.call(null,s.optional_QMARK_)){
return cljs.core.cons.call(null,schema.spec.collection.one_element.call(null,true,schema.core.named.call(null,s.schema,s.name),((function (vec__9736,singles,multi,this$__$1){
return (function (item_fn,x){
var temp__4423__auto__ = cljs.core.seq.call(null,x);
if(temp__4423__auto__){
var x__$1 = temp__4423__auto__;
item_fn.call(null,cljs.core.first.call(null,x__$1));

return cljs.core.rest.call(null,x__$1);
} else {
item_fn.call(null,schema.utils.error.call(null,schema.utils.make_ValidationError.call(null,s.schema,new cljs.core.Keyword("schema.core","missing","schema.core/missing",1420181325),(new cljs.core.Delay(((function (temp__4423__auto__,vec__9736,singles,multi,this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,s.name),new cljs.core.Symbol(null,"present?","present?",-1810613791,null));
});})(temp__4423__auto__,vec__9736,singles,multi,this$__$1))
,null)),null)));

return null;
}
});})(vec__9736,singles,multi,this$__$1))
),more);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.optional_tail.call(null,schema.core.named.call(null,s.schema,s.name),((function (vec__9736,singles,multi,this$__$1){
return (function (item_fn,x){
var temp__4425__auto__ = cljs.core.seq.call(null,x);
if(temp__4425__auto__){
var x__$1 = temp__4425__auto__;
item_fn.call(null,cljs.core.first.call(null,x__$1));

return cljs.core.rest.call(null,x__$1);
} else {
return null;
}
});})(vec__9736,singles,multi,this$__$1))
,more)], null);
}
});})(vec__9736,singles,multi,this$__$1))
,(cljs.core.truth_(multi)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements.call(null,multi)], null):null),cljs.core.reverse.call(null,singles));
})(),((function (this$__$1){
return (function (_,elts,extra){
var head = cljs.core.mapv.call(null,schema.utils.error_val,elts);
if(cljs.core.seq.call(null,extra)){
return cljs.core.conj.call(null,head,schema.utils.error_val.call(null,schema.utils.error.call(null,schema.utils.make_ValidationError.call(null,null,extra,(new cljs.core.Delay(((function (head,this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.count.call(null,extra)),new cljs.core.Symbol(null,"has-extra-elts?","has-extra-elts?",-1376562869,null));
});})(head,this$__$1))
,null)),null))));
} else {
return head;
}
});})(this$__$1))
);
});

cljs.core.PersistentVector.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
var vec__9737 = schema.core.parse_sequence_schema.call(null,this$__$1);
var singles = cljs.core.nth.call(null,vec__9737,(0),null);
var multi = cljs.core.nth.call(null,vec__9737,(1),null);
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var iter__7227__auto__ = ((function (vec__9737,singles,multi,this$__$1){
return (function schema$core$iter__9738(s__9739){
return (new cljs.core.LazySeq(null,((function (vec__9737,singles,multi,this$__$1){
return (function (){
var s__9739__$1 = s__9739;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__9739__$1);
if(temp__4425__auto__){
var s__9739__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9739__$2)){
var c__7225__auto__ = cljs.core.chunk_first.call(null,s__9739__$2);
var size__7226__auto__ = cljs.core.count.call(null,c__7225__auto__);
var b__9741 = cljs.core.chunk_buffer.call(null,size__7226__auto__);
if((function (){var i__9740 = (0);
while(true){
if((i__9740 < size__7226__auto__)){
var s = cljs.core._nth.call(null,c__7225__auto__,i__9740);
cljs.core.chunk_append.call(null,b__9741,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),schema.core.explain.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(s))),(cljs.core.truth_(s.optional_QMARK_)?new cljs.core.Symbol(null,"optional","optional",-600484260,null):new cljs.core.Symbol(null,"one","one",-1719427865,null))));

var G__9742 = (i__9740 + (1));
i__9740 = G__9742;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9741),schema$core$iter__9738.call(null,cljs.core.chunk_rest.call(null,s__9739__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9741),null);
}
} else {
var s = cljs.core.first.call(null,s__9739__$2);
return cljs.core.cons.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),schema.core.explain.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(s))),(cljs.core.truth_(s.optional_QMARK_)?new cljs.core.Symbol(null,"optional","optional",-600484260,null):new cljs.core.Symbol(null,"one","one",-1719427865,null))),schema$core$iter__9738.call(null,cljs.core.rest.call(null,s__9739__$2)));
}
} else {
return null;
}
break;
}
});})(vec__9737,singles,multi,this$__$1))
,null,null));
});})(vec__9737,singles,multi,this$__$1))
;
return iter__7227__auto__.call(null,singles);
})(),(cljs.core.truth_(multi)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain.call(null,multi)], null):null)));
});
/**
 * A schema for a pair of schemas and their names
 */
schema.core.pair = (function schema$core$pair(first_schema,first_name,second_schema,second_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,first_schema,first_name),schema.core.one.call(null,second_schema,second_name)], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Record = (function (klass,schema,__meta,__extmap,__hash){
this.klass = klass;
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7069__auto__,k__7070__auto__){
var self__ = this;
var this__7069__auto____$1 = this;
return cljs.core._lookup.call(null,this__7069__auto____$1,k__7070__auto__,null);
});

schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7071__auto__,k9747,else__7072__auto__){
var self__ = this;
var this__7071__auto____$1 = this;
var G__9749 = (((k9747 instanceof cljs.core.Keyword))?k9747.fqn:null);
switch (G__9749) {
case "klass":
return self__.klass;

break;
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9747,else__7072__auto__);

}
});

schema.core.Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7083__auto__,writer__7084__auto__,opts__7085__auto__){
var self__ = this;
var this__7083__auto____$1 = this;
var pr_pair__7086__auto__ = ((function (this__7083__auto____$1){
return (function (keyval__7087__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7084__auto__,cljs.core.pr_writer,""," ","",opts__7085__auto__,keyval__7087__auto__);
});})(this__7083__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7084__auto__,pr_pair__7086__auto__,"#schema.core.Record{",", ","}",opts__7085__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"klass","klass",-1386752349),self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IIterable$ = true;

schema.core.Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9746){
var self__ = this;
var G__9746__$1 = this;
return (new cljs.core.RecordIter((0),G__9746__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"klass","klass",-1386752349),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7067__auto__){
var self__ = this;
var this__7067__auto____$1 = this;
return self__.__meta;
});

schema.core.Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7063__auto__){
var self__ = this;
var this__7063__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7073__auto__){
var self__ = this;
var this__7073__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7064__auto__){
var self__ = this;
var this__7064__auto____$1 = this;
var h__6890__auto__ = self__.__hash;
if(!((h__6890__auto__ == null))){
return h__6890__auto__;
} else {
var h__6890__auto____$1 = cljs.core.hash_imap.call(null,this__7064__auto____$1);
self__.__hash = h__6890__auto____$1;

return h__6890__auto____$1;
}
});

schema.core.Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7065__auto__,other__7066__auto__){
var self__ = this;
var this__7065__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6443__auto__ = other__7066__auto__;
if(cljs.core.truth_(and__6443__auto__)){
var and__6443__auto____$1 = (this__7065__auto____$1.constructor === other__7066__auto__.constructor);
if(and__6443__auto____$1){
return cljs.core.equiv_map.call(null,this__7065__auto____$1,other__7066__auto__);
} else {
return and__6443__auto____$1;
}
} else {
return and__6443__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7078__auto__,k__7079__auto__){
var self__ = this;
var this__7078__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"klass","klass",-1386752349),null], null), null),k__7079__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7078__auto____$1),self__.__meta),k__7079__auto__);
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7079__auto__)),null));
}
});

schema.core.Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7076__auto__,k__7077__auto__,G__9746){
var self__ = this;
var this__7076__auto____$1 = this;
var pred__9750 = cljs.core.keyword_identical_QMARK_;
var expr__9751 = k__7077__auto__;
if(cljs.core.truth_(pred__9750.call(null,new cljs.core.Keyword(null,"klass","klass",-1386752349),expr__9751))){
return (new schema.core.Record(G__9746,self__.schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9750.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__9751))){
return (new schema.core.Record(self__.klass,G__9746,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7077__auto__,G__9746),null));
}
}
});

schema.core.Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7081__auto__){
var self__ = this;
var this__7081__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"klass","klass",-1386752349),self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7068__auto__,G__9746){
var self__ = this;
var this__7068__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,G__9746,self__.__extmap,self__.__hash));
});

schema.core.Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7074__auto__,entry__7075__auto__){
var self__ = this;
var this__7074__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7075__auto__)){
return cljs.core._assoc.call(null,this__7074__auto____$1,cljs.core._nth.call(null,entry__7075__auto__,(0)),cljs.core._nth.call(null,entry__7075__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7074__auto____$1,entry__7075__auto__);
}
});

schema.core.Record.prototype.schema$core$Schema$ = true;

schema.core.Record.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec.call(null,(function (){var p = schema.spec.core.precondition.call(null,this$__$1,((function (this$__$1){
return (function (p1__9743_SHARP_){
return (p1__9743_SHARP_ instanceof self__.klass);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__9744_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__9744_SHARP_),self__.klass),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
});})(this$__$1))
);
var temp__4423__auto__ = new cljs.core.Keyword(null,"extra-validator-fn","extra-validator-fn",1562905865).cljs$core$IFn$_invoke$arity$1(this$__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var evf = temp__4423__auto__;
return cljs.core.some_fn.call(null,p,schema.spec.core.precondition.call(null,this$__$1,evf,((function (evf,temp__4423__auto__,p,this$__$1){
return (function (p1__9745_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__9745_SHARP_),new cljs.core.Symbol(null,"passes-extra-validation?","passes-extra-validation?",-1964809231,null));
});})(evf,temp__4423__auto__,p,this$__$1))
));
} else {
return p;
}
})(),new cljs.core.Keyword(null,"constructor","constructor",-1953928811).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,this$__$1)),schema.core.map_elements.call(null,self__.schema),schema.core.map_error.call(null));
});

schema.core.Record.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,self__.schema)),cljs.core.symbol.call(null,cljs.core.pr_str.call(null,self__.klass))),new cljs.core.Symbol(null,"record","record",861424668,null));
});

schema.core.Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"klass","klass",253779178,null),new cljs.core.Symbol(null,"schema","schema",58529736,null)], null);
});

schema.core.Record.cljs$lang$type = true;

schema.core.Record.cljs$lang$ctorPrSeq = (function (this__7103__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Record");
});

schema.core.Record.cljs$lang$ctorPrWriter = (function (this__7103__auto__,writer__7104__auto__){
return cljs.core._write.call(null,writer__7104__auto__,"schema.core/Record");
});

schema.core.__GT_Record = (function schema$core$__GT_Record(klass,schema__$1){
return (new schema.core.Record(klass,schema__$1,null,null,null));
});

schema.core.map__GT_Record = (function schema$core$map__GT_Record(G__9748){
return (new schema.core.Record(new cljs.core.Keyword(null,"klass","klass",-1386752349).cljs$core$IFn$_invoke$arity$1(G__9748),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__9748),null,cljs.core.dissoc.call(null,G__9748,new cljs.core.Keyword(null,"klass","klass",-1386752349),new cljs.core.Keyword(null,"schema","schema",-1582001791)),null));
});

schema.core.record_STAR_ = (function schema$core$record_STAR_(klass,schema__$1,map_constructor){
if(cljs.core.map_QMARK_.call(null,schema__$1)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Expected map, got %s",schema.utils.type_of.call(null,schema__$1))));
}

return cljs.core.with_meta.call(null,(new schema.core.Record(klass,schema__$1,null,null,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"constructor","constructor",-1953928811),map_constructor], null));
});
schema.core.explain_input_schema = (function schema$core$explain_input_schema(input_schema){
var vec__9757 = cljs.core.split_with.call(null,(function (p1__9754_SHARP_){
return (p1__9754_SHARP_ instanceof schema.core.One);
}),input_schema);
var required = cljs.core.nth.call(null,vec__9757,(0),null);
var more = cljs.core.nth.call(null,vec__9757,(1),null);
return cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__9757,required,more){
return (function (p1__9755_SHARP_){
return schema.core.explain.call(null,p1__9755_SHARP_.schema);
});})(vec__9757,required,more))
,required),((cljs.core.seq.call(null,more))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),cljs.core.mapv.call(null,schema.core.explain,more)], null):null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.FnSchema = (function (output_schema,input_schemas,__meta,__extmap,__hash){
this.output_schema = output_schema;
this.input_schemas = input_schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7069__auto__,k__7070__auto__){
var self__ = this;
var this__7069__auto____$1 = this;
return cljs.core._lookup.call(null,this__7069__auto____$1,k__7070__auto__,null);
});

schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7071__auto__,k9759,else__7072__auto__){
var self__ = this;
var this__7071__auto____$1 = this;
var G__9761 = (((k9759 instanceof cljs.core.Keyword))?k9759.fqn:null);
switch (G__9761) {
case "output-schema":
return self__.output_schema;

break;
case "input-schemas":
return self__.input_schemas;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9759,else__7072__auto__);

}
});

schema.core.FnSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7083__auto__,writer__7084__auto__,opts__7085__auto__){
var self__ = this;
var this__7083__auto____$1 = this;
var pr_pair__7086__auto__ = ((function (this__7083__auto____$1){
return (function (keyval__7087__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7084__auto__,cljs.core.pr_writer,""," ","",opts__7085__auto__,keyval__7087__auto__);
});})(this__7083__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7084__auto__,pr_pair__7086__auto__,"#schema.core.FnSchema{",", ","}",opts__7085__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output-schema","output-schema",272504137),self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),self__.input_schemas],null))], null),self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IIterable$ = true;

schema.core.FnSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9758){
var self__ = this;
var G__9758__$1 = this;
return (new cljs.core.RecordIter((0),G__9758__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"output-schema","output-schema",272504137),new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.FnSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7067__auto__){
var self__ = this;
var this__7067__auto____$1 = this;
return self__.__meta;
});

schema.core.FnSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7063__auto__){
var self__ = this;
var this__7063__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.FnSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7073__auto__){
var self__ = this;
var this__7073__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7064__auto__){
var self__ = this;
var this__7064__auto____$1 = this;
var h__6890__auto__ = self__.__hash;
if(!((h__6890__auto__ == null))){
return h__6890__auto__;
} else {
var h__6890__auto____$1 = cljs.core.hash_imap.call(null,this__7064__auto____$1);
self__.__hash = h__6890__auto____$1;

return h__6890__auto____$1;
}
});

schema.core.FnSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7065__auto__,other__7066__auto__){
var self__ = this;
var this__7065__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6443__auto__ = other__7066__auto__;
if(cljs.core.truth_(and__6443__auto__)){
var and__6443__auto____$1 = (this__7065__auto____$1.constructor === other__7066__auto__.constructor);
if(and__6443__auto____$1){
return cljs.core.equiv_map.call(null,this__7065__auto____$1,other__7066__auto__);
} else {
return and__6443__auto____$1;
}
} else {
return and__6443__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.FnSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7078__auto__,k__7079__auto__){
var self__ = this;
var this__7078__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"output-schema","output-schema",272504137),null,new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),null], null), null),k__7079__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7078__auto____$1),self__.__meta),k__7079__auto__);
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7079__auto__)),null));
}
});

schema.core.FnSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7076__auto__,k__7077__auto__,G__9758){
var self__ = this;
var this__7076__auto____$1 = this;
var pred__9762 = cljs.core.keyword_identical_QMARK_;
var expr__9763 = k__7077__auto__;
if(cljs.core.truth_(pred__9762.call(null,new cljs.core.Keyword(null,"output-schema","output-schema",272504137),expr__9763))){
return (new schema.core.FnSchema(G__9758,self__.input_schemas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9762.call(null,new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),expr__9763))){
return (new schema.core.FnSchema(self__.output_schema,G__9758,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7077__auto__,G__9758),null));
}
}
});

schema.core.FnSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7081__auto__){
var self__ = this;
var this__7081__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output-schema","output-schema",272504137),self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),self__.input_schemas],null))], null),self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7068__auto__,G__9758){
var self__ = this;
var this__7068__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,G__9758,self__.__extmap,self__.__hash));
});

schema.core.FnSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7074__auto__,entry__7075__auto__){
var self__ = this;
var this__7074__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7075__auto__)){
return cljs.core._assoc.call(null,this__7074__auto____$1,cljs.core._nth.call(null,entry__7075__auto__,(0)),cljs.core._nth.call(null,entry__7075__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7074__auto____$1,entry__7075__auto__);
}
});

schema.core.FnSchema.prototype.schema$core$Schema$ = true;

schema.core.FnSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,cljs.core.ifn_QMARK_,((function (this$__$1){
return (function (p1__8027__8028__auto__){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__8027__8028__auto__),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null));
});})(this$__$1))
));
});

schema.core.FnSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.input_schemas) > (1))){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"=>*","=>*",1909690043,null),schema.core.explain.call(null,self__.output_schema),cljs.core.map.call(null,schema.core.explain_input_schema,self__.input_schemas));
} else {
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"=>","=>",-813269641,null),schema.core.explain.call(null,self__.output_schema),schema.core.explain_input_schema.call(null,cljs.core.first.call(null,self__.input_schemas)));
}
});

schema.core.FnSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"output-schema","output-schema",1913035664,null),new cljs.core.Symbol(null,"input-schemas","input-schemas",658376722,null)], null);
});

schema.core.FnSchema.cljs$lang$type = true;

schema.core.FnSchema.cljs$lang$ctorPrSeq = (function (this__7103__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/FnSchema");
});

schema.core.FnSchema.cljs$lang$ctorPrWriter = (function (this__7103__auto__,writer__7104__auto__){
return cljs.core._write.call(null,writer__7104__auto__,"schema.core/FnSchema");
});

schema.core.__GT_FnSchema = (function schema$core$__GT_FnSchema(output_schema,input_schemas){
return (new schema.core.FnSchema(output_schema,input_schemas,null,null,null));
});

schema.core.map__GT_FnSchema = (function schema$core$map__GT_FnSchema(G__9760){
return (new schema.core.FnSchema(new cljs.core.Keyword(null,"output-schema","output-schema",272504137).cljs$core$IFn$_invoke$arity$1(G__9760),new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805).cljs$core$IFn$_invoke$arity$1(G__9760),null,cljs.core.dissoc.call(null,G__9760,new cljs.core.Keyword(null,"output-schema","output-schema",272504137),new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805)),null));
});

schema.core.arity = (function schema$core$arity(input_schema){
if(cljs.core.seq.call(null,input_schema)){
if((cljs.core.last.call(null,input_schema) instanceof schema.core.One)){
return cljs.core.count.call(null,input_schema);
} else {
return Number.MAX_VALUE;
}
} else {
return (0);
}
});
/**
 * A function outputting a value in output schema, whose argument vector must match one of
 * input-schemas, each of which should be a sequence schema.
 * Currently function schemas are purely descriptive; they validate against any function,
 * regardless of actual input and output types.
 */
schema.core.make_fn_schema = (function schema$core$make_fn_schema(output_schema,input_schemas){
if(cljs.core.seq.call(null,input_schemas)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Function must have at least one input schema")));
}

if(cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,input_schemas)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Each arity must be a vector.")));
}

if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core.distinct_QMARK_,cljs.core.map.call(null,schema.core.arity,input_schemas)))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Arities must be distinct")));
}

return (new schema.core.FnSchema(output_schema,cljs.core.sort_by.call(null,schema.core.arity,input_schemas),null,null,null));
});
/**
 * Records name in schema's metadata.
 */
schema.core.schema_with_name = (function schema$core$schema_with_name(schema__$1,name){
return cljs.core.vary_meta.call(null,schema__$1,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),name);
});
/**
 * Returns the name of a schema attached via schema-with-name (or defschema).
 */
schema.core.schema_name = (function schema$core$schema_name(schema__$1){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,schema__$1));
});
/**
 * Returns the namespace of a schema attached via defschema.
 */
schema.core.schema_ns = (function schema$core$schema_ns(schema__$1){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,schema__$1));
});
/**
 * Get the current global schema validation setting.
 */
schema.core.fn_validation_QMARK_ = (function schema$core$fn_validation_QMARK_(){
return cljs.core.deref.call(null,schema.utils.use_fn_validation);
});
/**
 * Globally turn on (or off) schema validation for all s/fn and s/defn instances.
 */
schema.core.set_fn_validation_BANG_ = (function schema$core$set_fn_validation_BANG_(on_QMARK_){
return cljs.core.reset_BANG_.call(null,schema.utils.use_fn_validation,on_QMARK_);
});
/**
 * Attach the schema to fn f at runtime, extractable by fn-schema.
 */
schema.core.schematize_fn = (function schema$core$schematize_fn(f,schema__$1){
return cljs.core.vary_meta.call(null,f,cljs.core.assoc,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1);
});
/**
 * Produce the schema for a function defined with s/fn or s/defn.
 */
schema.core.fn_schema = (function schema$core$fn_schema(f){
if(cljs.core.fn_QMARK_.call(null,f)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Non-function %s",schema.utils.type_of.call(null,f))));
}

var or__6455__auto__ = schema.utils.class_schema.call(null,schema.utils.fn_schema_bearer.call(null,f));
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
var m__7773__auto__ = cljs.core.meta.call(null,f);
var k__7774__auto__ = new cljs.core.Keyword(null,"schema","schema",-1582001791);
var temp__4423__auto__ = cljs.core.find.call(null,m__7773__auto__,k__7774__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__7775__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__7775__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__7774__auto__,m__7773__auto__)));
}
}
});
/**
 * Sets the maximum length of value to be output before it is contracted to a prettier name.
 */
schema.core.set_max_value_length_BANG_ = (function schema$core$set_max_value_length_BANG_(max_length){
return cljs.core.reset_BANG_.call(null,schema.utils.max_value_length,max_length);
});

//# sourceMappingURL=core.js.map