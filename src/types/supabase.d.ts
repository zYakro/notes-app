export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      habits: {
        Row: {
          createdAt: string
          difficulty: Database["public"]["Enums"]["difficulty"] | null
          goals: Json[] | null
          id: number
          motivation: string | null
          name: string | null
          progress: number | null
          user_id: string
        }
        Insert: {
          createdAt?: string
          difficulty?: Database["public"]["Enums"]["difficulty"] | null
          goals?: Json[] | null
          id?: number
          motivation?: string | null
          name?: string | null
          progress?: number | null
          user_id?: string
        }
        Update: {
          createdAt?: string
          difficulty?: Database["public"]["Enums"]["difficulty"] | null
          goals?: Json[] | null
          id?: number
          motivation?: string | null
          name?: string | null
          progress?: number | null
          user_id?: string
        }
        Relationships: []
      }
      inventory: {
        Row: {
          id: number
          inventory: string[] | null
          user_id: string | null
        }
        Insert: {
          id?: number
          inventory?: string[] | null
          user_id?: string | null
        }
        Update: {
          id?: number
          inventory?: string[] | null
          user_id?: string | null
        }
        Relationships: []
      }
      journal: {
        Row: {
          createdAt: string | null
          id: number
          name: string | null
          text: string | null
          user_id: string
        }
        Insert: {
          createdAt?: string | null
          id?: number
          name?: string | null
          text?: string | null
          user_id?: string
        }
        Update: {
          createdAt?: string | null
          id?: number
          name?: string | null
          text?: string | null
          user_id?: string
        }
        Relationships: []
      }
      "shop-items": {
        Row: {
          created_at: string
          description: string | null
          id: number
          itemProps: Json | null
          name: string | null
          price: number | null
          title: string | null
          type: Database["public"]["Enums"]["shop-item"] | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: number
          itemProps?: Json | null
          name?: string | null
          price?: number | null
          title?: string | null
          type?: Database["public"]["Enums"]["shop-item"] | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: number
          itemProps?: Json | null
          name?: string | null
          price?: number | null
          title?: string | null
          type?: Database["public"]["Enums"]["shop-item"] | null
        }
        Relationships: []
      }
      "users-info": {
        Row: {
          coins: number | null
          created_at: string
          email: string | null
          exp: number | null
          id: number
          preferences: Json | null
          user_id: string
        }
        Insert: {
          coins?: number | null
          created_at?: string
          email?: string | null
          exp?: number | null
          id?: number
          preferences?: Json | null
          user_id?: string
        }
        Update: {
          coins?: number | null
          created_at?: string
          email?: string | null
          exp?: number | null
          id?: number
          preferences?: Json | null
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      buy_item: {
        Args: {
          name: string
        }
        Returns: undefined
      }
    }
    Enums: {
      difficulty: "easy" | "medium" | "hard"
      goal:
        | "name"
        | "description"
        | "icon"
        | "isCompleted"
        | "completedAt"
        | "createdAt"
      "shop-item": "panel" | "theme" | "background"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
