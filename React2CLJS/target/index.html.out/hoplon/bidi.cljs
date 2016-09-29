(ns hoplon.bidi (:require [cuerdas.core :as s] [bidi.bidi :as bidi] [schema.core :as schema] [bidi.schema :as bschema] [javelin.core :refer [->Cell input? cell cell? destroy-cell! lift lens? set-formula! cell-doseq* deref* set-cell! lens formula? alts! dosync* cell-map formula]] [hoplon.jquery :refer [check-val! text-val!]] [hoplon.core :refer [form audio input menuitem hgroup do! timeout $text base h1 set-attributes! embed shadow h3 body keygen progress main cite on-page-load i p nav ruby a menu blockquote img $comment span track data u dl select html thead del fieldset aside figure figcaption q on! bdi append-child! video address caption dd rp hr tbody table html-var add-initfn! pre ul replace-child! html-time html-map sup dfn sub mark script button wbr insert-before! strong li dt rtc td tr section th optgroup bust-cache iframe remove-child! legend em kbd spliced html-object article abbr template multicol prerendering? <!-- source output set-styles! route-cell header datalist tfoot s ins footer title h5 canvas param div option summary samp small style textarea loop-tpl* h4 head ol details col label picture rt when-dom h6 link page-load colgroup meter html-meta static-elements bdo --> b code dialog noframes do-watch noscript safe-nth h2 area br]]) (:require-macros [javelin.core :refer [with-let mx2 dosync cell= set-cell!= prop-cell cell-doseq defc cell-let-1 defc= macroexpand-all mx cell-let]] [hoplon.core :refer [text elem+ cache-key with-timeout defelem+ when-tpl static sexp defelem elem def-values if-tpl cond-tpl with-page-load for-tpl with-dom case-tpl loop-tpl with-interval with-init!]]))





(def match-route bidi/match-route)

(def ^:dynamic *route* (route-cell ""))

(defn- wrap-route
  "Takes `routes` and a (route-cell).
   Returns formula cell containing current matching handler."
  [routes routec]
  (javelin.core/cell=
    (:handler (bidi/match-route routes (s/strip-prefix routec "#")))))

(defn- wrap-route-params
  "Takes `routes` and a (route-cell).
   Returns formula cell containing current route params."
  [routes routec]
  (javelin.core/cell=
    (:route-params (bidi/match-route routes (s/strip-prefix routec "#")))))

(defn route
  "Takes `routes`, returns a formula cell with the current route handler."
  [routes]
  (wrap-route routes *route*))

(defn route-params
  "Takes `routes`, returns a formula cell with the current route params."
  [routes]
  (wrap-route-params routes *route*))

(defn route?
  "Takes `routes` and `handler`, returns formula cell.
   Formula cell is true if `route` is currently active."
  [routes handler]
  (javelin.core/cell= (= route (route routes))))

(defn mkroute
  "Generate a valid route. (includes '#' character)"
  [routes & routeopts]
  (s/join ["#" (apply bidi/path-for routes routeopts)]))

(defn route!
  "Change URL hash, does not reload the page."
  [routes & routeopts]
  (aset js/window "location" "hash"
    (apply mkroute routes routeopts)))

(defn validate
  "Validate `routes` against bidi schema."
  [routes]
  (schema/validate bschema/RoutePair routes))
